// Diferença entre VAR e LET

// VAR não pode ser redeclarada mas se vocês fizer conseguirá redaclarar normalmente mesmo que não seja a melhor escrita

// Exemplo

var nome = "Michel";
var nome = "Pedro";

console.log(nome);

// Se fizer isso com Let acontecerá o erro "identifier 'nome' has already been declared"

let nome = "Michel";
// let nome = "Pedro"; --> identifier 'nome' has already been declared

// ECMAScript 2015 (ES6) é a padronização do JS
