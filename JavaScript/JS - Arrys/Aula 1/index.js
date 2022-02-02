// Arrys

const nomes = ["Michel", "Juliana", "Mercia", "Pedro", "Antanio", "Felipe"];

console.log(nomes);

nomes[2] = "João"; // alterando indice dois
console.log(nomes);

const removido = nomes.pop(); // Tanto remove o ultimo indece do Arry, quanto retorna para dentro da variavel.
// Similar ao pop, tem o shift, remove o indice 0

console.log(nomes, removido);

nomes.push("kauan"); // adicionando um elemento dentro do Arry
// Similar ao push, tem o unshift, adiciona ao indice 0

console.log(nomes);

const novo = nomes.slice(1, 4);

console.log(novo);

// convertendo String por Arry

const nome2 = "Michel Silva Amorim";
const nomes2 = nome2.split(" "); // Transformando String em Arry
console.log(nomes2);

// convertendo Arry para Strin

const transArry = ["Michle", "Silva", "Amorim"];
const transNome = transArry.join(" ");

console.log(transNome);
