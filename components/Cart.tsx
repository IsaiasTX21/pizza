"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { WHATSAPP } from "@/lib/data";

type Line = { key: string; name: string; detail?: string; price: number; qty: number };
type Ctx = { lines: Line[]; count: number; total: number; open: boolean; setOpen: (v: boolean) => void; add: (l: Omit<Line, "qty">) => void; change: (key: string, d: number) => void };
const C = createContext<Ctx | null>(null);

export const money = (n: number) => "R$ " + n.toFixed(2).replace(".", ",");
export const useCart = () => {
  const c = useContext(C);
  if (!c) throw new Error("CartProvider ausente");
  return c;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const add: Ctx["add"] = (l) => {
    setLines((p) => (p.some((x) => x.key === l.key) ? p.map((x) => (x.key === l.key ? { ...x, qty: x.qty + 1 } : x)) : [...p, { ...l, qty: 1 }]));
    setOpen(true);
  };
  const change = (key: string, d: number) =>
    setLines((p) => p.map((x) => (x.key === key ? { ...x, qty: x.qty + d } : x)).filter((x) => x.qty > 0));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
  return <C.Provider value={{ lines, count, total, open, setOpen, add, change }}>{children}</C.Provider>;
}

export function BagButton() {
  const { count, setOpen } = useCart();
  return (
    <button className="bag" onClick={() => setOpen(true)}>
      Sacola <span aria-label={`${count} itens`}>{count}</span>
    </button>
  );
}

export function CartDrawer() {
  const { lines, total, open, setOpen, change } = useCart();
  const text = lines.map((l) => `${l.qty}x ${l.name}${l.detail ? ` (${l.detail})` : ""}`).join("\n") + `\nTotal: ${money(total)}`;
  return (
    <aside className="drawer" data-open={open} aria-hidden={!open} aria-label="Sua sacola">
      <div className="drawer__head">
        <h2>Sua sacola</h2>
        <button onClick={() => setOpen(false)} aria-label="Fechar sacola">✕</button>
      </div>
      {lines.length === 0 ? (
        <p className="drawer__empty">Sua sacola está vazia. Escolha uma pizza no cardápio e ela aparece aqui.</p>
      ) : (
        <>
          <ul>
            {lines.map((l) => (
              <li key={l.key}>
                <div>
                  <strong>{l.name}</strong>
                  {l.detail && <span>{l.detail}</span>}
                </div>
                <div className="qty">
                  <button onClick={() => change(l.key, -1)} aria-label="Remover um">−</button>
                  {l.qty}
                  <button onClick={() => change(l.key, 1)} aria-label="Adicionar um">+</button>
                </div>
                <b>{money(l.qty * l.price)}</b>
              </li>
            ))}
          </ul>
          <div className="drawer__foot">
            <p>Total <b>{money(total)}</b></p>
            <a className="btn" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido:\n" + text)}`} target="_blank" rel="noopener noreferrer">
              Enviar pedido pelo WhatsApp
            </a>
          </div>
        </>
      )}
    </aside>
  );
}
