// Funcao IIFE -> criando função fora do escopo global. Uma função anonima

(function (idade, peso, altura) {
  const sobrenome = "Silva";

  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Michel"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.93);

const nome = "qualquer coisa";
console.log(nome);
