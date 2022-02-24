// Métodos úteis para objetos

const produto = { nome: "caneca", preco: 1.8 };
const caneca = Object.assign({}, produto, { material: "porcelana" });

// Object.assign(); // serve para copiar um objeto

// freeze

//Object.freeze(); // voce nao podera mais adicionar, deleter... dentro do seu objeto

// keys

console.log(Object.keys(produto)); // voce vê as chaves dentro do seu objeto

// getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
// mostra o que é essa propiedade

// values

console.log(Object.values(produto)); // mostra apenas os valores

// entries

for (let valor of Object.entries(produto)) {
  console.log(valor);
}
// retorna chave e valores porem em array
