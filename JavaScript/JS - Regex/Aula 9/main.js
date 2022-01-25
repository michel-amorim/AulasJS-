const { lookahead } = require("./base");

console.log(lookahead);

// Lookkaheade --> Checa na frente da sua string se existe alguma coisa ele faz o que voce esta pedindo

// Pegando toda minha expressão
console.log(lookahead.match(/.+[^in]active$/gim));

// Positive Lookahead (Pegando apenas Active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive Lookahead (Pegando apenas Inactive)
console.log(lookahead.match(/.+(?=inactive)/gim));

// Negative Lookahead (Pegando apenas Inactive)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative Lookahead (Pegando apenas active)
console.log(lookahead.match(/^(?!.+inactive).+$/gim));

//

// Lookbehind = Checa atras da sua string se existe alguma coisa ele faz o que voce esta pedindo

// Positive Lookebehind (frases que começam com online)
console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));

// Negative Lookebehind (frases que começam com online)
console.log(lookahead.match(/^.+(?<!^ONLINE.+)$/gim));

//

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`;

console.log(
  cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)
);
