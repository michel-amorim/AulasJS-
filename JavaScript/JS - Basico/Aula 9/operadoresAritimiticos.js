// Operadores aritimeticos de atribuilçao e incremento

/*
Atritimético
+ -> Adição / Concatenação
- -> subtração
* -> multiplicação
/ -> divisão
** -> potenciação
% -> Resto da divisão
*/

// concatenação

let num1 = 2;
let num2 = "10";

console.log(num1 + num2);

num2 = 10;

// Adição
console.log(num1 + num2);

// Subtração
console.log(num1 - num2);

// Multiplicação
console.log(num1 * num2);

// Divisão
console.log(num1 / num2);

// Potenciação
console.log(num1 ** num2);

// Resto da divisão
console.log(num1 % num2);

console.log();

// Operador de inclemento -> ++

let contador = 1;
// Pós incremento
contador++; // 2
contador++; // 3

console.log(contador);

// O valor de incremento pode tanto ficar a frente como atras.  Porém tem comportamentos diferentes. Se colocar ele atras dentro de um .log ele somará depois

// Pré incremento

let contador1 = 1;
console.log(++contador1);

// Operador de decremento -> ' -- '

// Pré decremento (mas tambem pode ter pós)

let contador2 = 10;
console.log(--contador2);

console.log();

// Operador de atribuição

let contador3 = 2;
contador3 += 2;
console.log(contador3);

console.log();

// Erro para contas -- NaN -- Not a Number

const num3 = 10;
const num4 = "luiz";

console.log(num3 * num4);

// Convertendo String para Number

let num5 = 10;
let num6 = parseInt("5"); // Essa função só retorna numero inteiro

console.log(num5 * num6);

num6 = parseFloat("5.2"); // Essa função analisa tambem com casas decimais

console.log(num5 + num6);

num6 = Number("7.2"); // Essa função analisa numeros inteiros e casas decimais

console.log(num5 + num6);
