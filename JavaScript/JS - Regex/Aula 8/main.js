// Retrovisores com Match e Replace

// $1 --> retrovisor \1

const { html, lookahead } = require("./base");

//console.log(html.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));

console.log(
  html.replace(
    /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,
    '$1 HAHAH "$3" HAH $4'
  )
);
