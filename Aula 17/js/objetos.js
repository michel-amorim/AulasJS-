// criando um objeto literal {} <= abre e fecha um objeto

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};

const pessoa2 = {
  nome: "Maria",
  sobrenome: "Oliveira",
  idade: 55,
};
console.log(pessoa1.nome);
console.log(pessoa2.nome);

// function objeto

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa3 = criaPessoa("Luiz", "Otavio", 25);
const pessoa4 = criaPessoa("Michel", "Silva", 24);
const pessoa5 = criaPessoa("Juliana", "Bastos", 38);
const pessoa6 = criaPessoa("Joaquim", "Lopes", 09);

console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome, pessoa6.nome);

// this objeto

const pessoa7 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  },
};

pessoa7.fala();
