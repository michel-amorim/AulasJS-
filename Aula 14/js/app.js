let Num1 = 10.4896215649;
let Num2 = 2.5;

console.log(Num1.toString() + Num2);

// toString - transformar numero em letra temporariamente ou não
// toFixed - arredondar numeros decimais

console.log(Num1.toFixed(2));

// isInteger - Descobre se o numero é inteiro ou decimais

console.log(Number.isInteger(Num1));

// isNaN -- valida a qualidade da conta numerica.

let Num3 = 14;
let temp = Num3 * '5';

console.log(Number.isNaN(temp));
