// concatenando Arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const soma = num1.concat(num2);

console.log(soma);

// ... rest operation or spread operation

// concatenando com spread operation
const possivelSoma = [...num1, ...num2];
console.log(possivelSoma);
