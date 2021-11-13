/*
Operadores Logicos

&& -> AND -> E ->  Se voce tiver uma expressão FALSE seu valor retornará FALSE, se quiser TRUE precisam ser todas TRUE

|| -> OR -> OU -> Se voce tiver uma expressão TRUE seu valor retornará TRUE, se quiser FALSE precisam ser todas FALSE

! -> NOT -> NÃO -> inverte uma expressão
*/

const expressaoAndTrue = false && false && false && true;

console.log(expressaoAndTrue);

// AND (&&) -- para que dê verdadeiro, todas os expressões tem que ser TRUE, caso algum seja FALSE, todos os outros operadores darão FALSE

const expressaoAndFalse = true && false;

console.log(expressaoAndFalse);

// OR (||)

const expressoesOr1 = false || false || true || false;
const expressoesOr2 = false || false || false || true;

console.log(expressoesOr1);
console.log(expressoesOr2);

// Exemplo para && || -- Usuario logando e errando a senha:

const usuario1 = "luiz";
const senha1 = "123456";

const vaiLogar1 = usuario1 === "luiz" && senha1 === "12345";

console.log(vaiLogar1);

// Usuario errou a senha e não consegue efetuar o login da sua conta

const usuario2 = "luiz";
const senha2 = "123456";

const vaiLogar2 = usuario2 === "luiz" || senha2 === "12345";

console.log(vaiLogar2);

//Usario errou a senha porém consegue efetuar login com seu nome

// NOT (!)sssss

console.log(!true);

console.log(!false);

console.log(!!false);
