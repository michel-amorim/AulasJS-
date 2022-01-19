// For of - Estrutura de repetição

const nome = ["Michel", "Silva"];

// For antigo - Geralmente com iteráveis (array ou strings)

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// for in - Retorna o indice ou chave(string, array ou objetos)

for (let i in nome) {
  console.log(nome[i]);
}

// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let valor of nome) {
  console.log(valor);
}

// For Each

nome.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
