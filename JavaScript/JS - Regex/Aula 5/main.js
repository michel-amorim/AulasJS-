const { alfabeto } = require("./base");

/* 

Conjuntos = [...] <- toda vezque tiver entre colchetes é um conjunto

 Ranges = [ - ] de alguma coisa ate outra coisa. Sempre do menor para o maior

*/

// conjunto

console.log(alfabeto.match(/[abc123]+/gi)); // --> conjunto
console.log(alfabeto.match(/[^abc123]/g)); // --> negando o conjunto que esta dentro

// ranger

console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z1-9]+/gi));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00AE]+/g)); // Unicode. Serve tbm para palavras acentuadas

// Formas simplificadas e negações simplificadas

console.log(alfabeto.match(/\W/g)); // Negação simplificada

console.log(alfabeto.match(/\w+/g)); // Forma simplificada

console.log(alfabeto.match(/\d+/g)); // Forma simplificada para pegar digitos
console.log(alfabeto.match(/\D+/g)); // Negação simplificada para digitos

console.log(alfabeto.match(/\s+/g)); // Encontra espaços
console.log(alfabeto.match(/\S+/g)); // Não encontra o espaço
