const { texto, arquivos } = require("./base");

//Quantificadores

/*

* (opcional) --> 0 ou mais vezes {0,}
+ (obrigatorio) --> quantifica uma ou mais vezes {1,}
? (opcional) --> 0 ou uma vez {0, 1}
\ Caractere de escape
{min  = vezes que vai aparecer, max = vezes que vai aparecer}

*/

/*
console.log(texto);
const regExp1 = /Jo+ão+/gi;
console.log(texto.match(regExp1));
*/

const regExp2 = /\.(jpe?g)/gi;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  if (!valido) continue;

  console.log(arquivo);
}
