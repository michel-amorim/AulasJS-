/*
Operadores de comparação

> -- maior que 

>= - maior que OU igual a 

< -- menor que 

<= - menor que OU igual a 

== - igualdade (valor) NÂO UTILIZAR

===  igualdade estrita (valor e tipo)

!= - diferente (valor) NÂO UTILIZAR

!==  diferente estrito (valor e tipo)
*/

const comp = 10 >= 5;
console.log(comp); // valor boolean -- true -- verdadeiro

//

const comp2 = 10 <= 5;
console.log(comp2); // valor boolean -- false -- falso

//

const num1 = 10;
const num2 = 10;
const comp3 = num1 === num2;
console.log(comp3);

//

let num3 = 10;
let num4 = "10";
let comp4 = num3 === num4;
console.log(comp4);

//

num3 = 10;
num4 = "10";
comp4 = num3 !== num4;
console.log(comp4);
