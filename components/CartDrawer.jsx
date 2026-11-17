'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart, money, deliveryFor, FREE_DELIVERY_FROM } from './CartContext';

export function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button className="btn sm" onClick={() => setOpen(true)} aria-label="Open your bag">
      🛍 Bag{count > 0 && <span className="count">{count}</span>}
    </button>
  );
}

export function AddButton({ item, className = 'btn sm', children = '+ Add' }) {
  const { add } = useCart();
  return <button className={className} onClick={() => add({ key: item.id, id: item.id, name: item.name, price: item.price, img: item.img })}>{children}</button>;
}

export default function CartDrawer() {
  const { items, count, subtotal, dispatch, open, setOpen, toast } = useCart();
  const path = usePathname();
  const fee = deliveryFor(subtotal);
  const missing = FREE_DELIVERY_FROM - subtotal;

  return (
    <>
      {count > 0 && !open && path !== '/checkout' && (
        <button className="cart" onClick={() => setOpen(true)}>🛍 View bag · {count} · {money(subtotal)}</button>
      )}
      {toast && <div className="toast" role="status">✓ {toast}</div>}
      <div className={open ? 'overlay show' : 'overlay'} onClick={() => setOpen(false)} />
      <aside className={open ? 'drawer open' : 'drawer'} aria-hidden={!open} aria-label="Your bag">
        <div className="dhead"><h2>Your bag</h2><button className="x" onClick={() => setOpen(false)} aria-label="Close">✕</button></div>
        {items.length === 0 ? (
          <div className="empty"><p>Your bag is empty.</p><button className="btn sm" onClick={() => setOpen(false)}>Browse the menu</button></div>
        ) : (
          <>
            <ul className="dlist">
              {items.map((i) => (
                <li key={i.key}>
                  <Image src={i.img} alt="" width={64} height={64} unoptimized />
                  <div className="dinfo">
                    <b>{i.name}</b>
                    {i.size && <small>{i.size} size</small>}
                    <div className="qty">
                      <button onClick={() => dispatch({ type: 'dec', key: i.key })} aria-label="Decrease">−</button>
                      <span>{i.qty}</span>
                      <button onClick={() => dispatch({ type: 'inc', key: i.key })} aria-label="Increase">+</button>
                      <button className="rm" onClick={() => dispatch({ type: 'remove', key: i.key })}>Remove</button>
                    </div>
                  </div>
                  <strong>{money(i.price * i.qty)}</strong>
                </li>
              ))}
            </ul>
            <div className="dfoot">
              {missing > 0 && <p className="ship">Add {money(missing)} more for free delivery</p>}
              <div className="sum"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="sum"><span>Delivery</span><span>{fee === 0 ? 'Free' : money(fee)}</span></div>
              <div className="sum tot"><span>Total</span><span>{money(subtotal + fee)}</span></div>
              <Link href="/checkout" className="btn full" onClick={() => setOpen(false)}>Go to checkout</Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
