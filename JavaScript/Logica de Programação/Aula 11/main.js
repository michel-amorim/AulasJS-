// Atribuições via desestruturação (Arrys)

let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// desestruturação por Arrys

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];

console.log(primeiroNumero);

// desestruturação por Arrys

const numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, dois, tres, ...resto] = numeros2;

console.log(um, dois, tres);
console.log(resto);

// ...resto = rest -- quando quiser pegar os valores restante utilizasse "..." esse operador tambem pode ser usado como spread

const numeros3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [umZ, , tresZ, , cinco, , sete] = numeros3;

console.log(umZ, tresZ, cinco, sete);

// quando quiser pular valores, basta deixa-lo entre virgulas vazias

const numeros4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [, [, , seis]] = numeros4;

console.log(seis); // desestruturação por Arrys
console.log(numeros4[1][2]); // acessando Arrys dentro de Arrys
