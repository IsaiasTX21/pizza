'use client';
import { createContext, useContext, useEffect, useReducer, useState, useCallback } from 'react';

import { money, FREE_DELIVERY_FROM, DELIVERY_FEE, deliveryFor } from '@/lib/money';
export { money, FREE_DELIVERY_FROM, DELIVERY_FEE, deliveryFor };

const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);

function reducer(items, a) {
  switch (a.type) {
    case 'load': return a.items;
    case 'add': {
      const i = items.find((x) => x.key === a.item.key);
      return i ? items.map((x) => (x.key === i.key ? { ...x, qty: x.qty + 1 } : x)) : [...items, { ...a.item, qty: 1 }];
    }
    case 'inc': return items.map((x) => (x.key === a.key ? { ...x, qty: x.qty + 1 } : x));
    case 'dec': return items.flatMap((x) => (x.key === a.key ? (x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : []) : [x]));
    case 'remove': return items.filter((x) => x.key !== a.key);
    case 'clear': return [];
    default: return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    try { const s = JSON.parse(localStorage.getItem('forno-cart') || '[]'); if (Array.isArray(s)) dispatch({ type: 'load', items: s }); } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem('forno-cart', JSON.stringify(items)); } catch {} } }, [items, ready]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 2200); return () => clearTimeout(t); }, [toast]);

  const add = useCallback((item) => { dispatch({ type: 'add', item }); setToast(`${item.name} added to your bag`); }, []);
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <Ctx.Provider value={{ items, ready, count, subtotal, add, dispatch, open, setOpen, toast }}>
      {children}
    </Ctx.Provider>
  );
}
