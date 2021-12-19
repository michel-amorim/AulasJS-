// Number
// IEEE 754-2008 -- padrão de contas em JS

/*
toString() -- transformando em String 

toFixed() -- Arredondando casa decimais

Number.isInteger() -- Verifica se o numero é inteiro ou não (retorn true and false)

Number.isInteger -- verifica se a conta é Not a Number
*/

let num1 = 1;
let num2 = 2.5;

num1 = num1.toString(); // transformando em String
console.log(typeof num1);

console.log(num1 + num2);

//

num1 = 10.5789551255547;

console.log(num1.toFixed(2)); // Arredondando casa decimais

//

console.log(Number.isInteger(num1)); // Retornará falso pois o numero não é inteiro

//

let temp = num1 * "Ola";

console.log(Number.isNaN(temp)); // Retornará verdadeiro. A conta é um Not a Number

//

num1 = 0.7;
num2 = 0.1;

num1 += num2; // num1 = num1 + num2;

console.log(num1);
