// Escreva uma função que recebe 2 números e retorna o maior

function ex(max, min) {
  if (max > min) return max;
  return min;
}
// resposta minha com correção

console.log(ex(10, 2));

//

function max(x, y) {
  return x > y ? x : y;
}

console.log(max(10, 2));

// correção do professor -- refatorando

const max2 = (x, y) => (x > y ? x : y);

console.log(max2(10, 2));

// correção do professor -- refatorando
