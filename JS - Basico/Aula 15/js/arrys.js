// Criação de Arrys -- considerado objeto

// -- Indices    0       1        2

const alunos = ["Luiz", "Maria", "João"];
console.log(alunos[1]); // -- O indice de um Arrys é diferente do indice de uma String

//

alunos[0] = "Michel"; // -- Uma forma de manipular um elemento dentro do Arrys
console.log(alunos);

//

alunos.push("Juliana"); // -- Adiciona mais um elemento o fim do seu Arrys
console.log(alunos);

alunos.unshift("joaquim"); // -- Adiciona mais um elemento no inicio do seu Arrys ou seja, adiciona no indice 0
console.log(alunos);

//

const removidoFim = alunos.pop(); // -- Remove o ultimo elemento do Arrys, ultimo indice
console.log(removidoFim);
console.log(alunos);

//

const removidoInicio = alunos.shift(); // Remove o primeiro elemento do Arrys, indice 0
console.log(removidoInicio);
console.log(alunos);

//

delete alunos[1]; // Uma forma de deletar sem mexer nos indices, logo fica vazio, ficara "undefined" (valo que nao existe)
console.log(alunos);

//

console.log(alunos instanceof Array); // Verificar se realmente estamos trabalhando com Array
