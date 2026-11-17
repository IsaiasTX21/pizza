export const money = (n) => `R$ ${n.toFixed(2)}`;
export const FREE_DELIVERY_FROM = 100;
export const DELIVERY_FEE = 8.9;
export const deliveryFor = (subtotal) => (subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE);
