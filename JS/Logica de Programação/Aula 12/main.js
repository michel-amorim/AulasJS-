// Atribuição via desestruturação (objetos)

const pessoa = {
  nome: "Michel",
  sobrenome: "Silva",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const { nome, sobrenome } = pessoa; // Atribuição via desestruturação
console.log(nome, sobrenome);

const pessoa1 = {
  nome1: "Michel",
  sobrenome1: "Silva",
  idade1: 30,
  endereco1: {
    rua1: "Av Brasil",
    numero1: 320,
  },
};
const {
  nome1,
  sobrenome1,
  endereco1: { rua1, numero1 },
} = pessoa1;
console.log(nome1, sobrenome1, rua1, numero1);
