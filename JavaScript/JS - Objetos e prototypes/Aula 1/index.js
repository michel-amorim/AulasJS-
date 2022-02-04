// Revisão Objetos

// Objeto literal
const pessoa = {
  nome: "Michel",
  sobrenome: "Silva",
};

const chave = "nome";

// Qualquer das duas ixibirá o valor no console, porem com colchete consigos acessar de forma dinamica
//console.log(pessoa[nome]);
//console.log(pessoa.sobrenome);

//

// Outra forma de construir objeto. Forma construtora
// Função podem tbm ter metodos
const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otavio";
pessoa1.idade = 35;
pessoa1.falarNome = function () {
  return `${this.sobrenome} está falando seu nome.`;
};
pessoa1.getDataNacimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
  // console.log(pessoa1[chave]);
}

// Objeto com Factore function, Constructor function e Classes

// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio");
//console.log(p1.nomeCompleto);

// Constructor funciton
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
const p2 = new Pessoa("luiz", "Otavio");
console.log(p2);
