function saudacao(nome) {
  return `Bom dia ${nome}`;
}

saudacao("Luiz");
saudacao("Maria");

const variavel = saudacao("Luiz");
console.log(variavel);

//

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(365, 217));

// função anonima

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// Arrow function -- jeito moderno de criar funções

const raizArrow = (n) => n ** 0.5;

console.log(raizArrow(16));
