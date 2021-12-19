// Strings

/* 

 concat - concatenar -- Nãos e usa muito, não tem exemplo
 indexOf -> Encontra palavras/letras nos indices
 lastIndexOf <- Encontra palavras/letras nos indices, começando do final
 match -- expressão regular
 Replace -- repetição
 length -- descobre a quantidade de caracteres
 slice ou substring -- Pegando caracteres especificos
 toUpperCase -- Deixa a strig tudo maiusculo 
 toLowwercase -- minusulo
 
 */

let umaString = "Um tex do texto";

console.log(umaString[4]); // <-- pegando um indece especifico

console.log(umaString.charAt(1)); // <-- Me mostra a letra do indice indicado

console.log(umaString.indexOf("texto")); // <-- Encontra a primeiro primeiro indice da palavra solicitada, no caso 'texto'
// Letra maiuscula e minuscula importão
// voce pode pedir tambem para começar de um determinado lugar Ex: indexOf('texto', 3) <-- começa a partir do indice 3

console.log(umaString.lastIndexOf("Um"));

console.log(umaString.match("texto")); // <-- pesquisar mais sobre expressão regular

umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.replace(/r/g, "p")); // <-- substituindo todas as letras r por P

console.log(umaString.length); // contando o tamanho dos caracteres

console.log(umaString.slice(2, 6)); // <-- Pegando caracteres especificos
// pode pegar tambem com negativo
