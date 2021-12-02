// Break e Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue;
  }
  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("");

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros1) {
  let numeroIn = numeros1[i];

  if (numeroIn === 2) {
    console.log("Pulei o número 2");
    continue;
  }
  console.log(numeroIn);

  if (numeroIn === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}

console.log("");

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i2 in numeros2) {
  let numeroClassico = numeros2[i2];

  if (numeroClassico === 2) {
    console.log("Pulei o número 2");
    continue;
  }
  console.log(numeroClassico);

  if (numeroClassico === 7) {
    console.log("7 encontrado, saindo...");
    break;
  }
}
