// Métodos úteis para objetos

const produto = { nome: "caneca", preco: 1.8 };
const caneca = Object.assign({}, produto, { material: "porcelana" });

Object.assign(); // serve para copiar um objeto

caneca.nome = "Camisa";
console.log(produto);
console.log(caneca);

// freeze

Object.freeze(); // voce nao podera mais adicionar, deleter... dentro do seu objeto

console.log(Object.keys(produto)); // voce vê as chaves dentro do seu objeto
