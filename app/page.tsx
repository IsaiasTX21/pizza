import { BagButton } from "@/components/Cart";
import { Menu, Deals } from "@/components/Menu";
import { hours, reviews } from "@/lib/data";

const features = [
  ["Fermentação de 48h", "A maturação lenta com nosso fermento natural garante alvéolos aerados, borda crocante e uma leveza de pluma."],
  ["Ingredientes Premium", "Tomates pelati italianos, muçarela de búfala, azeite extravirgem e embutidos artesanais."],
  ["Lenha a 450°C", "Lenha certificada que assa a massa em segundos e dá aquele aroma defumado inconfundível."],
  ["Entrega Térmica", "Caixas ventiladas mantêm a borda crocante e o queijo borbulhando até a sua porta."],
];

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#" className="brand">Forno &amp; Massa <small>Pizzaria Artesanal</small></a>
        <nav aria-label="Principal">
          <a href="#menu">Cardápio</a><a href="#deals">Ofertas</a><a href="#story">Nossa História</a><a href="#contact">Contato</a>
        </nav>
        <BagButton />
      </header>

      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <p className="live"><i /> Forno a lenha aceso hoje. Entrega em até 40 min.</p>
            <h1>A verdadeira arte da massa leve e da borda aerada.</h1>
            <p className="hero__lead">
              Nossas pizzas descansam por <b>48 horas de fermentação natural</b> (massa madre), recebem molho de tomate pelati italiano amassado à mão e são assadas a <b>450°C</b> em um verdadeiro forno a lenha.
            </p>
            <div className="hero__cta">
              <a className="btn" href="#menu">Ver Cardápio Completo</a>
              <a className="btn btn--ghost" href="#menu">Peça a Margherita Clássica</a>
            </div>
            <p className="proof">★★★★★ <b>4,9/5</b> (+1.200 avaliações). Farinha italiana Tipo 00.</p>
          </div>
          <div className="arch">
            <div className="ph" style={{ backgroundImage: "url(/images/pizza.png)" }} role="img" aria-label="Pizza Margherita assada no forno a lenha" />
            <p className="arch__tag"><b>Assada em 90 seg</b> Forno a lenha a 450°C</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap feats">
          {features.map(([t, d]) => (
            <div key={t}><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <Menu />
      <Deals />

      <section id="story" className="section">
        <div className="wrap story">
          <div className="ph story__img" style={{ backgroundImage: "url(/images/lareira.jpg)" }} role="img" aria-label="Pizza saindo do forno a lenha" />
          <div>
            <blockquote>
              “Respeitar o tempo da massa é respeitar quem se senta à mesa. Não usamos atalhos: apenas farinha, água, sal, fermento vivo e fogo.”
              <footer>Marco Rossi, mestre pizzaiolo e fundador da Forno &amp; Massa desde 2016</footer>
            </blockquote>
            <h2>De uma receita de família ao calor do fogo a lenha.</h2>
            <p>A Forno &amp; Massa nasceu em 2016 com um propósito simples: resgatar a autenticidade da pizza artesanal feita à mão. Tudo começa com o nosso <i>Lievito Madre</i>, cultivado e alimentado diariamente.</p>
            <p>Cada massa é aberta à mão, apenas com a ponta dos dedos, nunca com rolo, preservando o ar criado durante as 48 horas de maturação. O resultado é uma borda alta e tostada e um miolo macio que recebe os ingredientes mais frescos de pequenos produtores locais.</p>
            <dl className="stats">
              <div><dt>Anos de tradição</dt><dd>10+</dd></div>
              <div><dt>Maturação a frio</dt><dd>48h</dd></div>
              <div><dt>Pizzas assadas</dt><dd>85k</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--basil">
        <div className="wrap">
          <h2>Quem experimenta não troca</h2>
          <div className="reviews">
            {reviews.map((r) => (
              <figure key={r.who}>
                <p aria-label="5 estrelas">★★★★★</p>
                <blockquote>“{r.text}”</blockquote>
                <figcaption><b>{r.who}</b> {r.note}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="foot">
        <div className="wrap foot__grid">
          <div>
            <h3>Forno &amp; Massa</h3>
            <p>Pizzaria artesanal dedicada à fermentação natural, aos ingredientes frescos e ao calor autêntico do fogo a lenha.</p>
          </div>
          <div>
            <h4>Onde estamos</h4>
            <p>Rua das Oliveiras, 480, Jardim Botânico<br />Rio de Janeiro, RJ</p>
            <p>(21) 3456-7890<br />(21) 99876-5432 (WhatsApp Delivery)</p>
          </div>
          <div>
            <h4>Horários do forno</h4>
            <dl className="hours">{hours.map(([d, h]) => (<div key={d}><dt>{d}</dt><dd>{h}</dd></div>))}</dl>
          </div>
          <div>
            <h4>Navegue</h4>
            <p><a href="#menu">Cardápio Completo</a><br /><a href="#deals">Ofertas da Semana</a><br /><a href="#story">Fermentação Natural</a></p>
          </div>
        </div>
        <p className="foot__copy">© 2026 Forno &amp; Massa Pizzaria Artesanal. Feito com farinha 00, fogo e paixão.</p>
      </footer>
    </>
  );
}
