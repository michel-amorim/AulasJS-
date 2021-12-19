// Arrys é um objeto

//              0       1        2      <- indices do Arrys
const alunos = ["Luiz", "Maria", "Joao"];

alunos[0] = "Michel"; // substituindo no arrys no indice 0
alunos[2] = "Juliana"; // substituindo no arrys no indice novo, indice 3

console.log(alunos);

console.log(alunos.length); // descobrindo o tamnanho do Arrys

// .push <-- adiciona um indice ao final do Arrys

alunos.push("Fernanda");

// .unshift <-- adiciona um arrys no indice 0

alunos.unshift("Pedro");
console.log(alunos);

// .pop <-- removendo elementos do ultimo indice do arrys

const removido = alunos.pop(); // salvado quem foi removido do Arrys
console.log(removido);
console.log(alunos);

// .shift <-- removendo elementos do primeiro indice do arrys

const removido2 = alunos.shift(); // salvado quem foi removido do Arrys
console.log(removido2);
console.log(alunos);

// delete <-- deletando algum indice dentro do Arrys, porém voce deixa um espaço vazio no arrys

delete alunos[2];
console.log(alunos);

// slice <-- fatiando o arrys

alunos.push("Henrique");
alunos.push("Joaquim"); // adicionado ao fim do arrys novos arrys

console.log(alunos.slice(0, 1));

// instanceof Array <-- verificando se é arrys

console.log(alunos instanceof Array);
