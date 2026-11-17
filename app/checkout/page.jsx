'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, money, deliveryFor } from '@/components/CartContext';

const onlyDigits = (v) => v.replace(/\D/g, '');
const fmtCard = (v) => onlyDigits(v).slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
const fmtExp = (v) => { const d = onlyDigits(v).slice(0, 4); return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d; };
const fmtPhone = (v) => { const d = onlyDigits(v).slice(0, 11); return d.length > 6 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d; };

function FakeQR() {
  const cells = useMemo(() => { let s = 7; const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280); return Array.from({ length: 441 }, () => r() > 0.5); }, []);
  const finder = (x, y) => (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
  return (
    <svg viewBox="0 0 21 21" className="qr" shapeRendering="crispEdges" aria-label="Demo QR code">
      <rect width="21" height="21" fill="#fff" />
      {cells.map((on, i) => { const x = i % 21, y = Math.floor(i / 21); return on && !finder(x, y) ? <rect key={i} x={x} y={y} width="1" height="1" fill="#231d1a" /> : null; })}
      {[[0, 0], [14, 0], [0, 14]].map(([x, y]) => (<g key={x + '-' + y}><rect x={x} y={y} width="7" height="7" fill="#231d1a" /><rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" /><rect x={x + 2} y={y + 2} width="3" height="3" fill="#231d1a" /></g>))}
    </svg>
  );
}

export default function Checkout() {
  const { items, ready, subtotal, dispatch } = useCart();
  const fee = deliveryFor(subtotal);
  const total = subtotal + fee;
  const [f, setF] = useState({ name: '', phone: '', street: '', number: '', district: '', notes: '', method: 'card', card: '', holder: '', exp: '', cvv: '', change: '' });
  const [err, setErr] = useState({});
  const [paying, setPaying] = useState(false);
  const [order, setOrder] = useState(null);
  const set = (k, fn = (v) => v) => (e) => setF({ ...f, [k]: fn(e.target.value) });

  function validate() {
    const e = {};
    if (f.name.trim().length < 3) e.name = 'Enter your full name';
    if (onlyDigits(f.phone).length < 10) e.phone = 'Enter a valid phone number';
    if (!f.street.trim()) e.street = 'Enter your street';
    if (!f.number.trim()) e.number = 'Required';
    if (!f.district.trim()) e.district = 'Enter your neighborhood';
    if (f.method === 'card') {
      if (onlyDigits(f.card).length !== 16) e.card = 'Card number must have 16 digits';
      if (f.holder.trim().length < 3) e.holder = 'Enter the name on the card';
      const m = Number(f.exp.slice(0, 2));
      if (!/^\d{2}\/\d{2}$/.test(f.exp) || m < 1 || m > 12) e.exp = 'Use MM/YY';
      if (onlyDigits(f.cvv).length < 3) e.cvv = '3 digits';
    }
    setErr(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setPaying(true);
    setTimeout(() => {
      setOrder({ id: `FM-${Math.floor(10000 + Math.random() * 90000)}`, total, items, name: f.name, method: f.method, address: `${f.street}, ${f.number} — ${f.district}`, last4: onlyDigits(f.card).slice(-4) });
      dispatch({ type: 'clear' });
      setPaying(false);
      window.scrollTo({ top: 0 });
    }, 1600);
  }

  const bar = (
    <header className="nav"><div className="wrap navin"><Link href="/" className="logo"><span className="mark">F</span><span>Forno &amp; Massa<small>Artisan Pizzeria</small></span></Link><Link href="/#menu" className="btn sm ghost">← Back to menu</Link></div></header>
  );

  if (order) {
    return (
      <>{bar}
        <main className="wrap done">
          <div className="okmark">✓</div>
          <h1 className="h2">Payment approved!</h1>
          <p className="lead">Thanks, {order.name.split(' ')[0]}. Your order <b>{order.id}</b> is in the oven and will arrive in about 40 minutes.</p>
          <div className="box">
            <p><b>Delivering to:</b> {order.address}</p>
            <p><b>Payment:</b> {order.method === 'card' ? `Card ending in ${order.last4}` : order.method === 'pix' ? 'Pix' : 'Cash on delivery'}</p>
            <ul>{order.items.map((i) => <li key={i.key}><span>{i.qty}× {i.name}{i.size ? ` (${i.size})` : ''}</span><span>{money(i.qty * i.price)}</span></li>)}</ul>
            <div className="sum tot"><span>Total</span><span>{money(order.total)}</span></div>
          </div>
          <p className="muted demo">This is a demo store: no real payment was made.</p>
          <Link href="/" className="btn">Back to home</Link>
        </main>
      </>
    );
  }

  if (ready && items.length === 0) {
    return (<>{bar}<main className="wrap done"><h1 className="h2">Your bag is empty</h1><p className="lead">Add a pizza or two before checking out.</p><Link href="/#menu" className="btn">See the menu</Link></main></>);
  }

  const field = (k, label, props = {}, fn) => (
    <label className={`fld ${props.cls || ''}`}>{label}
      <input value={f[k]} onChange={set(k, fn)} aria-invalid={!!err[k]} {...props} />
      {err[k] && <em>{err[k]}</em>}
    </label>
  );

  return (
    <>{bar}
      <main className="wrap checkout">
        <form onSubmit={submit} noValidate>
          <h1 className="h2 left">Checkout</h1>
          <p className="demo-banner">Demo only. No real payment is processed. Test card: 4242 4242 4242 4242, any future date, any CVV.</p>

          <section className="fs"><h2 className="lg">Delivery details</h2>
            <div className="fgrid">
              {field('name', 'Full name', { autoComplete: 'name', cls: 'span2' })}
              {field('phone', 'Phone / WhatsApp', { inputMode: 'tel', placeholder: '(21) 99999-9999' }, fmtPhone)}
              {field('district', 'Neighborhood')}
              {field('street', 'Street', { cls: 'span2' })}
              {field('number', 'Number')}
              {field('notes', 'Notes (optional)', { placeholder: 'Apartment, landmark…' })}
            </div>
          </section>

          <section className="fs"><h2 className="lg">Payment method</h2>
            <div className="methods">
              {[['card', '💳 Credit card'], ['pix', '⚡ Pix'], ['cash', '💵 Cash']].map(([m, l]) => (
                <button type="button" key={m} className={f.method === m ? 'meth on' : 'meth'} onClick={() => setF({ ...f, method: m })}>{l}</button>
              ))}
            </div>
            {f.method === 'card' && (
              <div className="fgrid">
                {field('card', 'Card number', { inputMode: 'numeric', placeholder: '4242 4242 4242 4242', cls: 'span2' }, fmtCard)}
                {field('holder', 'Name on card', { cls: 'span2' })}
                {field('exp', 'Expiry', { placeholder: 'MM/YY', inputMode: 'numeric' }, fmtExp)}
                {field('cvv', 'CVV', { inputMode: 'numeric', placeholder: '123', maxLength: 4 }, onlyDigits)}
              </div>
            )}
            {f.method === 'pix' && (
              <div className="pix"><FakeQR /><div><p><b>Scan the QR code</b> or copy the demo code below.</p><code>00020126580014BR.GOV.BCB.PIX0136demo-forno-massa5204000053039865802BR</code><p className="muted">Click “Pay now” to simulate the payment.</p></div></div>
            )}
            {f.method === 'cash' && <div className="fgrid">{field('change', 'Change for (optional)', { placeholder: 'R$ 100', cls: 'span2' })}</div>}
          </section>

          <button className="btn full" disabled={paying}>{paying ? 'Processing payment…' : `Pay now · ${money(total)}`}</button>
        </form>

        <aside className="summary">
          <h2>Order summary</h2>
          <ul>
            {items.map((i) => (
              <li key={i.key}>
                <Image src={i.img} alt="" width={56} height={56} unoptimized />
                <div><b>{i.name}</b><small>{i.size ? `${i.size} · ` : ''}Qty {i.qty}</small></div>
                <span>{money(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="sum"><span>Subtotal</span><span>{money(subtotal)}</span></div>
          <div className="sum"><span>Delivery</span><span>{fee === 0 ? 'Free' : money(fee)}</span></div>
          <div className="sum tot"><span>Total</span><span>{money(total)}</span></div>
        </aside>
      </main>
    </>
  );
}
