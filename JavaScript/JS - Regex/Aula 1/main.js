// Expressões regulares

// flags comuns

// g = global --> Encontra todas as ocorrências
// i - insensitive --> ignora letras maiusculas ou minuculas, encontra ambas
// () --> grupo
// | --> ou

const { texto } = require("./base"); // Exportando pelo Node.JS

const regExp1 = /Café/gi;

console.log(regExp1.test(texto)); // Existe a palavra João no texto? Retorna valor Boolean --> true, false

//

const regExp2 = /(Teve )(5 filhos)/i;

console.log(regExp2.exec(texto));

console.log(regExp2.exec(texto)[0]);
console.log(regExp2.exec(texto).index); // --> local do indece que foi encontrado

//

const regExp3 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp3.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
