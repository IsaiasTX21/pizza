'use client';
import { useState } from 'react';
import Image from 'next/image';
import { categories, menu, LARGE_EXTRA } from '@/data';
import { useCart, money } from './CartContext';

export default function Menu() {
  const { add } = useCart();
  const [active, setActive] = useState('All');
  const [sizes, setSizes] = useState({});
  const items = active === 'All' ? menu : menu.filter((i) => i.cat === active);

  return (
    <section id="menu" className="section">
      <div className="wrap center">
        <h2 className="h2">Our Artisan Menu</h2>
        <p className="lead">Pick your favorite, choose the size and add it to your bag.</p>
        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={active === c} className={active === c ? 'tab on' : 'tab'} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="wrap grid3">
        {items.map((i) => {
          const isPizza = i.cat !== 'Drinks';
          const size = sizes[i.id] || 'Medium';
          const price = i.price + (isPizza && size === 'Large' ? LARGE_EXTRA : 0);
          return (
            <article className="card" key={i.id}>
              <div className="thumb">
                <Image src={i.img} alt={i.name} width={640} height={480} unoptimized />
                {i.tag && <span className="chip">{i.tag}</span>}
              </div>
              <div className="cbody">
                <small className="muted">{i.cat}</small>
                <h3>{i.name}</h3>
                <p>{i.desc}</p>
                {isPizza && (
                  <div className="sizes" role="group" aria-label="Size">
                    {['Medium', 'Large'].map((s) => (
                      <button key={s} className={size === s ? 'sz on' : 'sz'} onClick={() => setSizes({ ...sizes, [i.id]: s })}>{s}{s === 'Large' ? ` +${LARGE_EXTRA}` : ''}</button>
                    ))}
                  </div>
                )}
                <div className="row">
                  <div><small className="muted">{i.unit || size}</small><strong className="price">{money(price)}</strong></div>
                  <button className="btn sm" onClick={() => add({ key: isPizza ? `${i.id}-${size}` : i.id, id: i.id, name: i.name, price, img: i.img, size: isPizza ? size : undefined })}>+ Add</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
