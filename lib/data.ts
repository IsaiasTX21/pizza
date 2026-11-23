export type Item = { id: string; name: string; cat: string; tag?: string; img: string; desc: string; price: number; pizza: boolean };

export const cats = ["Todos", "Clássicas", "Especiais da Casa", "Sobremesas", "Bebidas"];

export const items: Item[] = [
  { id: "margherita", name: "Margherita Verace", cat: "Clássicas", tag: "Clássica", img: "margherita.png", pizza: true, price: 48.5, desc: "Molho de tomate pelati italiano, muçarela de búfala fresca, folhas grandes de manjericão, parmesão curado 12 meses e azeite extravirgem." },
  { id: "calabrese", name: "Calabresa Artesanal Curada", cat: "Clássicas", tag: "Mais vendida", img: "diavola.png", pizza: true, price: 51.58, desc: "Molho de tomate da casa, muçarela, calabresa artesanal defumada em fatias finas, cebola roxa marinada e azeitonas pretas." },
  { id: "quattro", name: "Quattro Formaggi", cat: "Clássicas", tag: "Cremosa", img: "quattro.png", pizza: true, price: 54.86, desc: "Base branca com fior di latte, gorgonzola dolce italiano, provolone defumado na lenha e lascas de grana padano." },
  { id: "portuguesa", name: "Portuguesa", cat: "Clássicas", img: "portuguesa.png", pizza: true, price: 53.22, desc: "Molho de tomate, muçarela, presunto cozido artesanal, ovos de codorna, cebola roxa, ervas frescas, palmito e orégano." },
  { id: "parma", name: "Parma, Rúcula e Stracciatella", cat: "Especiais da Casa", tag: "Escolha do chef", img: "parma.png", pizza: true, price: 64.7, desc: "Molho de tomate, muçarela, presunto de Parma curado 18 meses, rúcula selvagem, stracciatella cremosa e redução de balsâmico." },
  { id: "funghi", name: "Funghi e Trufa Negra", cat: "Especiais da Casa", tag: "Vegetariana", img: "funghi.png", pizza: true, price: 63.06, desc: "Creme de queijos artesanais, cogumelos Paris e Portobello salteados na manteiga de ervas, azeite trufado e tomilho fresco." },
  { id: "diavola", name: "Diavola Picante com Mel", cat: "Especiais da Casa", tag: "Picante", img: "Pizzadiavola.jpg", pizza: true, price: 59.78, desc: "Molho de tomate, muçarela, pepperoni artesanal crocante, pimenta calabresa fresca e finalização com mel picante selvagem." },
  { id: "chocolate", name: "Chocolate Belga e Morangos", cat: "Sobremesas", tag: "Irresistível", img: "chocolate.png", pizza: true, price: 51.58, desc: "Ganache cremoso de chocolate meio amargo 54%, morangos frescos e lascas de chocolate branco adicionadas na saída do forno." },
  { id: "banana", name: "Banana Caramelizada e Canela", cat: "Sobremesas", img: "banana.png", pizza: true, price: 46.66, desc: "Base de muçarela doce, banana flambada, açúcar mascavo, doce de leite e um toque de canela." },
  { id: "soda", name: "Soda Italiana Artesanal (500ml)", cat: "Bebidas", tag: "Refrescante", img: "soda.png", pizza: false, price: 16.9, desc: "Água com gás gelada com xarope natural de fruta (Maçã Verde, Frutas Vermelhas ou Limão Siciliano) e gelo." },
  { id: "softdrink", name: "Refrigerante 2 Litros", cat: "Bebidas", img: "softdrink.png", pizza: false, price: 15, desc: "Coca-Cola Original, Coca-Cola Zero ou Guaraná Antarctica (2L), entregue bem gelado." },
  { id: "ipa", name: "Cerveja Artesanal IPA (600ml)", cat: "Bebidas", tag: "Gelada", img: "beer.png", pizza: false, price: 26.9, desc: "Cerveja local estilo American IPA, com notas cítricas e amargor equilibrado, perfeita para acompanhar pizza." },
];

export const deals = [
  { id: "double", tag: "Mais pedido", name: "Combo Noite Dupla", desc: "2 pizzas Clássicas Grandes à sua escolha + 1 refrigerante de 2L gelado. Ideal para até 6 pessoas.", old: 138, price: 109.9 },
  { id: "couple", tag: "Para dois", name: "Combo Casal Artesanal", desc: "1 pizza Especial da Casa Grande + 1 pizza de sobremesa Média (Chocolate Belga com Morangos) para fechar com chave de ouro.", old: 126, price: 98.9 },
  { id: "crust", tag: "Quintas-feiras", name: "Borda Recheada Grátis", desc: "Na compra de qualquer pizza Especial da Casa Grande, a borda recheada de Catupiry ou Cheddar é por nossa conta.", old: 82.9, price: 68.9 },
];

export const reviews = [
  { who: "Camila Santoro", note: "Cliente há 3 anos", text: "A massa é tão leve que comi três fatias e não me senti pesada. A Parma com Rúcula e a Margherita são impecáveis." },
  { who: "Rafael Almeida", note: "Avaliação verificada", text: "Chegou super rápido e ainda borbulhando! O aroma defumado da lenha faz toda a diferença. A borda recheada de Catupiry é ótima." },
  { who: "Juliana Mendes", note: "Avaliação verificada", text: "O Combo Casal virou nossa tradição de sexta em casa. A pizza de Chocolate Belga com morangos frescos é surreal!" },
];

export const hours = [
  ["Segunda", "Massa descansando"],
  ["Terça a quinta", "18h às 23h"],
  ["Sexta e sábado", "18h às 0h30"],
  ["Domingo", "18h às 23h30"],
];

export const WHATSAPP = "5521981614216";
