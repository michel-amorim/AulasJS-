// Filter -> Sempre irá retornar um arrya, com a mesma quantidade ou menos

// FIltrando os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// A função filter precisa de uma função de callback com três valores automaticos, esses são; valor, indice, array

const numberFilter = numeros.filter((value) => value > 10);

//console.log(numberFilter);

// Exercicio

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne as pessoas com maiores que 5 caracteres no nome
const peapleFilterName = pessoas.filter((value) => value.nome.length > 5);

console.log(peapleFilterName);

// Retorne as pessoas com mais de 50 anos
const peapleFilterUpNumber = pessoas.filter((value) => value.idade > 50);

console.log(peapleFilterUpNumber);

// Retorne as pessoas que o nome termina com a

const peapleFilterFilenyA = pessoas.filter((value) => {
  return value.nome.toLowerCase().endsWith("a");
});

console.log(peapleFilterFilenyA);
