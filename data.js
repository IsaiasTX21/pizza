
export const categories = ['All', 'Classics', 'House Specials', 'Desserts', 'Drinks'];
export const LARGE_EXTRA = 12;
export const menu = [
  { id: 'margherita', name: 'Margherita Verace', cat: 'Classics', tag: 'Classic', price: 48.5, img: '/images/margherita.png', desc: 'Peeled Italian tomato sauce, fresh buffalo mozzarella, giant basil leaves, 12-month aged parmesan and extra virgin olive oil.' },
  { id: 'calabresa', name: 'Cured Artisan Calabrese', cat: 'Classics', tag: 'Best seller', price: 51.58, img: '/images/diavola.png', desc: 'House tomato sauce, mozzarella, thinly sliced smoked artisan calabrese sausage, marinated red onion and black olives.' },
  { id: 'quattro', name: 'Quattro Formaggi', cat: 'Classics', tag: 'Creamy', price: 54.86, img: '/images/quattro.png', desc: 'White base with fior di latte mozzarella, Italian gorgonzola dolce, wood-smoked provolone and shavings of grana padano.' },
  { id: 'portuguesa', name: 'Portuguese Style', cat: 'Classics', tag: '', price: 53.22, img: '/images/portuguesa.png', desc: 'Tomato sauce, mozzarella, artisan cooked ham, quail eggs, red onion, fresh herbs, hearts of palm and oregano.' },
  { id: 'parma', name: 'Parma, Arugula & Stracciatella', cat: 'House Specials', tag: "Chef's pick", price: 64.7, img: '/images/parma.png', desc: 'Tomato sauce, mozzarella, 18-month aged Parma ham, wild arugula, creamy stracciatella and a balsamic reduction.' },
  { id: 'funghi', name: 'Funghi & Black Truffle', cat: 'House Specials', tag: 'Vegetarian', price: 63.06, img: '/images/funghi.png', desc: 'Artisan cheese cream, Paris and Portobello mushrooms sautéed in herb butter, truffle oil and fresh thyme.' },
  { id: 'diavola', name: 'Spicy Diavola & Honey', cat: 'House Specials', tag: 'Spicy', price: 59.78, img: '/images/diavola.png', desc: 'Tomato sauce, mozzarella, crispy artisan pepperoni, fresh calabrian chili and a finish of spicy wild honey.' },
  { id: 'chocolate', name: 'Belgian Chocolate & Strawberries', cat: 'Desserts', tag: 'Irresistible', price: 51.58, img: '/images/chocolate.png', desc: 'Creamy 54% semi-dark ganache, fresh strawberries and white chocolate shavings added right out of the oven.' },
  { id: 'banana', name: 'Caramelized Banana & Cinnamon', cat: 'Desserts', tag: '', price: 46.66, img: '/images/banana.png', desc: 'Sweet mozzarella base, flambéed banana, muscovado sugar, dulce de leche and a touch of cinnamon.' },
  { id: 'soda', name: 'Artisan Italian Soda (500ml)', cat: 'Drinks', tag: 'Refreshing', price: 16.9, unit: 'Each', img: '/images/soda.png', desc: 'Iced sparkling water with natural fruit syrup (Green Apple, Red Berries or Sicilian Lemon) and ice.' },
  { id: 'cola', name: 'Soft Drink 2 Liters', cat: 'Drinks', tag: '', price: 15, unit: 'Each', img: '/images/softdrink.png', desc: 'Coca-Cola Original, Coca-Cola Zero or Guaraná Antarctica (2L), delivered super cold.' },
  { id: 'beer', name: 'Artisan IPA Beer (600ml)', cat: 'Drinks', tag: 'Ice cold', price: 26.9, unit: 'Each', img: '/images/beer.png', desc: 'Local American IPA-style beer with citrus notes and balanced bitterness, a perfect match for pizza.' },
];

export const combos = [
  { id: 'combo-night', dark: true, tag: 'Most ordered', name: 'Double Night Combo', desc: '2 Large Classic pizzas of your choice + 1 ice-cold 2L soft drink. Ideal for up to 6 people.', old: 138, price: 109.9, img: '/images/Double Night Combo.png' },
  { id: 'combo-couple', tag: 'For two', name: 'Artisan Couple Combo', desc: '1 Large House Special + 1 Medium Dessert pizza (Belgian Chocolate with Strawberries) to finish on a high note.', old: 126, price: 98.9, img: '/images/Artisan Couple Combo.png' },
  { id: 'combo-crust', tag: 'Thursdays', name: 'Free Stuffed Crust', desc: 'Buy any Large House Special pizza and get a free stuffed crust of Catupiry or Cheddar.', old: 82.9, price: 68.9, img: '/images/Free Stuffed Crust.png' },
];

export const heroImg = '/images/pizza.png';
export const storyImg = '/images/lareira.jpg';