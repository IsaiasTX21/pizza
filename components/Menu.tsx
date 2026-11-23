"use client";
import { useState } from "react";
import { cats, items, deals } from "@/lib/data";
import { money, useCart } from "./Cart";

export function Menu() {
  const [cat, setCat] = useState("Todos");
  const [size, setSize] = useState<Record<string, "Média" | "Grande">>({});
  const { add } = useCart();
  return (
    <section id="menu" className="section">
      <div className="wrap">
        <h2>Nosso Cardápio Artesanal</h2>
        <p className="lead">Escolha sua favorita, defina o tamanho e adicione à sacola.</p>
        <div className="chips" role="tablist" aria-label="Categorias do cardápio">
          {cats.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="tickets">
          {items.filter((i) => cat === "Todos" || i.cat === cat).map((i) => {
            const s = size[i.id] ?? "Média";
            const price = i.price + (i.pizza && s === "Grande" ? 12 : 0);
            return (
              <article key={i.id} className="ticket">
                <div className="ph" style={{ backgroundImage: `url(/images/${i.img})` }} role="img" aria-label={i.name} />
                <div className="ticket__body">
                  <p className="ticket__cat">{i.cat}{i.tag ? ` – ${i.tag}` : ""}</p>
                  <h3>{i.name}</h3>
                  <p>{i.desc}</p>
                  <div className="ticket__row">
                    {i.pizza ? (
                      <div className="sizes" role="group" aria-label="Tamanho">
                        {(["Média", "Grande"] as const).map((z) => (
                          <button key={z} aria-pressed={s === z} onClick={() => setSize({ ...size, [i.id]: z })}>
                            {z}{z === "Grande" ? " +12" : ""}
                          </button>
                        ))}
                      </div>
                    ) : <span />}
                    <b className="price">{money(price)}</b>
                  </div>
                  <button className="btn btn--sm" onClick={() => add({ key: `${i.id}-${s}`, name: i.name, detail: i.pizza ? s : undefined, price })}>
                    Adicionar
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Deals() {
  const { add } = useCart();
  return (
    <section id="deals" className="section section--basil">
      <div className="wrap">
        <h2>Combos e Ofertas da Semana</h2>
        <p className="lead">Condições especiais para reunir a família ou curtir uma noite de pizza quentinha.</p>
        <div className="deals">
          {deals.map((d) => (
            <article key={d.id} className="deal">
              <p className="ticket__cat">{d.tag}</p>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <p className="deal__price"><s>{money(d.old)}</s> <b>{money(d.price)}</b></p>
              <button className="btn btn--sm btn--ember" onClick={() => add({ key: d.id, name: d.name, price: d.price })}>Adicionar combo</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
