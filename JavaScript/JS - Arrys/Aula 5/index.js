// Array map

// Dobrando os valores

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const numerosDobro = numeros.map((valor, indice, arry) => valor * 2);

// console.log(numerosDobro);

//

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);

//onsole.log(nomes);

const idades = pessoas.map((obj) => {
  delete obj.nome;
  return obj;
});

//console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});

console.log(comIds);
