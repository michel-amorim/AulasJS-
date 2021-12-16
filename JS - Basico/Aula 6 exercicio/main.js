/*
Luiz Otavio Mirandan tem 30 anos, pesa 84kg tem 1.8 de altura e seu IMC é de 25.925
*/

const nome = "Michel";
const sobrenome = "Silva Amorim";
const idade = 24;
const peso = 100;
const altura = 1.93;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(
  nome + " " + sobrenome + " tem" + " " + idade + " anos, pesa",
  peso,
  "kg"
);
console.log("tem" + " " + altura + " de altura e seu imc é de" + " " + imc);
console.log(nome + " nasceu em" + " " + anoNascimento);

console.log();
// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
