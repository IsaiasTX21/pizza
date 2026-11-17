import Image from 'next/image';
import Menu from '@/components/Menu';
import { CartButton, AddButton } from '@/components/CartDrawer';
import { heroImg, storyImg, combos } from '@/data';
import { money } from '@/lib/money';

const features = [
  ['⏱', '48h Fermentation', 'Slow maturation with our own natural starter guarantees airy alveoli, a crisp crust and a light-as-air feel.'],
  ['🌿', 'Premium Ingredients', 'Peeled Italian tomatoes, buffalo mozzarella, extra virgin olive oil and artisan cured meats.'],
  ['🔥', '450°C Wood Fire', 'Certified firewood that bakes the dough in seconds and adds that unmistakable smoky aroma.'],
  ['🛵', 'Thermal Delivery', 'Ventilated boxes keep the crust crisp and the cheese bubbling all the way to your door.'],
];
const reviews = [
  ['Camila Santoro', 'Customer for 3 years', '“The dough is so light I ate three slices and didn’t feel heavy. The Parma with Arugula and the Margherita are impeccable.”'],
  ['Rafael Almeida', 'Verified review', '“Arrived super fast and still bubbling! The smoky aroma from the wood fire makes all the difference. The Catupiry stuffed crust is great.”'],
  ['Juliana Mendes', 'Verified review', '“The Couple Combo became our Friday tradition at home. The Belgian Chocolate pizza with fresh strawberries is surreal!”'],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <a href="#" className="logo"><span className="mark">F</span><span>Forno &amp; Massa<small>Artisan Pizzeria</small></span></a>
          <nav><a href="#menu">Menu</a><a href="#deals">Deals</a><a href="#story">Our Story</a><a href="#contact">Contact</a></nav>
          <CartButton />
        </div>
      </header>

      <section className="hero">
        <div className="wrap herogrid">
          <div>
            <span className="pill">● Wood oven lit today · Delivery in up to 40 min</span>
            <h1>The true art of <em>light dough</em> and an airy crust.</h1>
            <p className="lead left">Our pizzas rest for <b>48 hours of natural fermentation</b> (sourdough), get Italian peeled tomato sauce crushed by hand and are baked at <b>450°C</b> in a real wood-fired oven.</p>
            <div className="ctas">
              <a href="#menu" className="btn">See Full Menu</a>
              <a href="#menu" className="btn ghost">Order the Classic Margherita</a>
            </div>
            <div className="meta"><span className="stars">★★★★★</span> <b>4.9/5</b> (+1,200 reviews) <span className="sep" /> Italian Tipo 00 flour</div>
          </div>
          <div className="heroimg">
            <Image src={heroImg} alt="Wood-fired Margherita pizza" width={900} height={900} priority unoptimized />
            <div className="badge b1"><b>48h</b> Natural Fermentation<small>Super light digestion</small></div>
            <div className="badge b2">Baked in 90 sec<small>Wood oven at 450°C</small></div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap grid4">
          {features.map(([ic, t, d]) => (
            <div className="feat" key={t}><span className="ic">{ic}</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <Menu />

      <section id="deals" className="section tan">
        <div className="wrap">
          <div className="dealhead"><div><small className="eyebrow">Unmissable offers</small><h2 className="h2 left">Weekly Combos &amp; Deals</h2></div><p className="muted">Special conditions to bring the family together or enjoy a hot pizza night.</p></div>
          <div className="grid3">
            {combos.map((c) => (
              <div key={c.name} className={c.dark ? 'deal dk' : 'deal'}>
                <span className="chip">{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <div className="row"><div><s>{money(c.old)}</s><strong className="price">{money(c.price)}</strong></div><AddButton item={c} className={c.dark ? 'btn sm' : 'btn sm blk'}>Add combo</AddButton></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="section">
        <div className="wrap story">
          <div className="storyimg">
            <Image src={storyImg} alt="Pizza coming out of the wood-fired oven" width={900} height={1100} unoptimized />
            <blockquote>“Respecting the dough’s time is respecting who sits at the table. We use no shortcuts: just flour, water, salt, living yeast and fire.”<footer><span className="mark">MR</span> Master pizzaiolo Marco Rossi<small>Founder of Forno &amp; Massa · Since 2016</small></footer></blockquote>
          </div>
          <div>
            <small className="eyebrow">Our tradition</small>
            <h2 className="h2 left">From a family recipe to the heat of the wood fire.</h2>
            <p className="muted">Forno &amp; Massa was born in 2016 with a simple purpose: to bring back the authenticity of handmade artisan pizza. It all starts with our <i>Lievito Madre</i>, cultivated and fed daily.</p>
            <p className="muted">Each dough is opened by hand with just the fingertips, never with a rolling pin, preserving the air created during 48 hours of maturation. The result is a tall, toasted crust and a soft center that holds the freshest ingredients from small local producers.</p>
            <div className="stats"><div><b>10+</b>Years of tradition</div><div><b>48h</b>Cold maturation</div><div><b>85k</b>Pizzas baked</div></div>
          </div>
        </div>
        <div className="wrap">
          <h2 className="h3 center">Once you try it, you won’t switch</h2>
          <div className="grid3">
            {reviews.map(([n, r, t]) => (
              <figure className="review" key={n}><span className="stars">★★★★★</span><p>{t}</p><figcaption><span className="mark sm">{n.split(' ').map((w) => w[0]).join('')}</span><b>{n}</b><small>{r}</small></figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="foot">
        <div className="wrap footgrid">
          <div><a href="#" className="logo light"><span className="mark">F</span> Forno &amp; Massa</a><p>Artisan pizzeria dedicated to natural fermentation, fresh ingredients and the authentic heat of the wood fire.</p></div>
          <div><h4>Find Us</h4><p>Rua das Oliveiras, 480 — Jardim Botânico<br />Rio de Janeiro, RJ</p><p>(21) 3456-7890</p><p>(21) 99876-5432 (WhatsApp Delivery)</p></div>
          <div><h4>Oven Hours</h4><dl><dt>Monday</dt><dd className="red">Dough resting</dd><dt>Tue – Thu</dt><dd>6:00 PM – 11:00 PM</dd><dt>Fri – Sat</dt><dd>6:00 PM – 12:30 AM</dd><dt>Sunday</dt><dd>6:00 PM – 11:30 PM</dd></dl></div>
          <div><h4>Navigate</h4><p><a href="#menu">Full Menu</a></p><p><a href="#deals">Weekly Deals</a></p><p><a href="#story">Natural Fermentation</a></p><p><a href="#menu">My Order Bag</a></p></div>
        </div>
        <div className="wrap legal"><span>© 2026 Forno &amp; Massa Artisan Pizzeria. All rights reserved.</span><span>Made with 00 flour, fire and passion.</span></div>
      </footer>
    </>
  );
}
