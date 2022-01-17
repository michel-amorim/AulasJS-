// funcoes contrutoras (constructor functions) -> retorna objetos
// Precisa obrigatoriamente criar (new)m começa com letra maiuscula

function Pessoa(nome, sobrenome) {
  // atribudos privados
  const ID = 123456;

  const metodoInterno = function () {};

  // atribudos privados

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metado = function () {
    console.log(this.nome + ": sou um métado");
  };
  // Atributos ou metodos publicos
}

const p1 = new Pessoa("Luiz", "Otavio");
const p2 = new Pessoa("Michel", "Silva");
p2.metado();
