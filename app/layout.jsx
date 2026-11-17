import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import CartDrawer from '@/components/CartDrawer';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--serif', style: ['normal', 'italic'] });
const inter = Inter({ subsets: ['latin'], variable: '--sans' });

export const metadata = {
  title: 'Forno & Massa | Artisan Pizzeria',
  description: '48-hour naturally fermented dough, baked in a 450°C wood-fired oven.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
