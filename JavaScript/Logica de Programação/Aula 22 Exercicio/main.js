/*
Escreva uma função que recebe um número e retorne o seguinte:

Número divisivel por 3 = Fizz
Número divisivel por 5 = Buzz
Número divisivel por 3 e por 5 = FizzBuzz
Número NÂO é divisivel por 3 e 5 = Retorna o própio número

Checa se o número é realmente um número = Retorna o própio número

Use a função com números de 0 a 100
*/

function FizzBuzz(numero) {
  if (typeof numero !== "number") return NaN;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
