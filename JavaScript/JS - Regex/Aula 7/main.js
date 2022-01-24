const { cpfs, cpfs2 } = require("./base");

// começa com e termina com

// ^ --> no inicio significa começa com diferente de [^] --> sinal de negação

// $ --> termina com

// m - multiline

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
