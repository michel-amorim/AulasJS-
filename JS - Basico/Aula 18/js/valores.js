/*
Dadis primitivos -- Imutáveis = string, numberm boolean, undefined, null (bigint, symbol) - valores copiados

Dados Referêcia -- mutável - array, object, function - passados por referência
*/

let a = "A";
let b = a; // <-- Cópia
console.log(a, b);

//

let A = [1, 2, 3];
let B = A;

A.push(4);
console.log(A, B);

B.pop();
console.log(B);
