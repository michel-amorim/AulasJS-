// For classico

// Para o for funcionar precisa-se de: uma variavel, uma condição e incrementar a variavel de controle

// costuma se utilizar a variavel com o nome 'i' = index
for (let i = 0; i <= 5; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(i, par);
}

// verificando tambem se é par ou impar

for (let i1 = 0; i1 <= 50; i1 += 10) {
  console.log(i1);
}

// pulando de 10 em 10 ou qunato quiser

for (let i3 = -10; i3 <= 50; i3 += 5) {
  console.log(i3);
}

// Vindo do negativo em ordem decrecente

for (let i4 = 500; i4 >= 400; i4 -= 20) {
  console.log(i4);
}

// Vindo em ordem decrecente

const frutas = ["Maçã", "Pêra", "Uva", "Banana", "Melancia", "Morangos"];

for (let i5 = 0; i5 < frutas.length; i5++) {
  console.log(` Indice ${i5}`, frutas[i5]);
}

// Exemplo utilizando const e for classico
