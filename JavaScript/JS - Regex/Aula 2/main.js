// Expressão Match e Replace

const { texto } = require("./base");

const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
console.log(texto.replace(/João/gi, "Felipe")); // subtituição juntamente com as flag G - global com a flag I

// quando voce tem um grupo com a função reapleace. voce consegue enumerar grupos com uma função especial

console.log(texto.replace(/(João|Maria)/gi, "<b>$1</b>"));

// outra maneira é dentro de uma função

console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return "  " + input.toUpperCase() + " ";
  })
);
