/*
Operadores de comparação

> -- maior que 
>= - maior que ou igual a 
< -- menor que 
<= - menor que ou igual a 
== - igualdade (valor) **********
===  igualdade estrita (valor e tipo)
!= - diferente (valor) **********
!==  diferente estrito (valor e tipo)
*/

const comp = 10 >= 5;
console.log(comp); // valor boolean -- true -- verdadeiro

const comp2 = 10 <= 5;
console.log(comp2); // valor boolean -- false -- falso

const num1 = 10;
const num2 = 10;
const comp3 = num1 === num2;
console.log(comp3);

const num3 = 10;
const num4 = "10";
const comp4 = num3 === num4;
console.log(comp4);
