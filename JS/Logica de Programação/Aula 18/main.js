// While e do While - estrutura de repetição

let i = 0;

//while (i <= 10) {
//console.log(i);
//i++;
//}

// Exemplo pouco improvavel

const nome = "Michel";

let iString = 0;

//while (iString < nome.length) {
//console.log(nome[iString]);
// iString++;
//}

// Exemplo mais Real

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("#############");

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

// geralmente quando você não sabe quando vai parar se utiliza While

// While(Enquanto) - chega a condição e executa o laço
// Do while - Executa e depois chega a condição
