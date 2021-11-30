// For in - Estrutura de repetição
// For in -> Lê os indices ou chaves do objetos

const frutas = ["Pera", "Maçã", "Uva"];

for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Michel",
  Sobrenome: "Silva",
  Idade: 24,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
