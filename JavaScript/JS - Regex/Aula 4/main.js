// Greedy e non-greendy

// Greedy --> comportamento padrão que pega tudo ate mesmo tags

// todos os quantificadores vem na versão greedy mas todos tem a possibilidade da non-greedy

const { html } = require("./base");

console.log(html.match(/<.+?>.+?<\/.+?>/g));
