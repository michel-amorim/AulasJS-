// Avaliação de curto-circuito

// Valores avaliados por falso em JS:
/*

&& -> vai retornar 'o valor false'

false = falso no literal 

falsy =
0, '', "", `` = string vazia pode ser avaliado em falso

null, undefined = pode ser avaliado em falso

NaN = pode ser avaliado em falso

Qualquer coisa avaliado diferentes desses vão dar TRUE
*/

// Exemplos:
console.log("luiz" && "Maria");

//

function falaOI() {
  return "oi";
}

let vaiExecutar;

console.log(vaiExecutar && falaOi);

/*
|| -> vai retornar 'o valor verdadeiro'

Qualquer valor dentro das strings
*/

// Exemplos:

const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(corPadrao);

//

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
