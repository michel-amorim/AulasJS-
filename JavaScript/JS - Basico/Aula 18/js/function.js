// function

function saudacao(nome) {
  return `Bom dia ${nome}!`;
}

const variavel = saudacao("Luiz");
console.log(variavel);

//

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));

// função anonima

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// Arrow function -- jeito moderno de criar funções

const raizArrow = (n) => n ** 0.5;

console.log(raizArrow(16));
