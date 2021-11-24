// DIferençça entre Let e Var

let nome = "Luiz";
// let nome = "Otavio";

// não pode redeclarar let no mesmo escopo: typeErro: Identifier 'nome' has already been declared

var nome2 = "Luiz";
var nome2 = "Luiz";

// Var pode sobrescrever normalmente

const verdadeira = true;
if (verdadeira) {
  let nome = "Otavio";
  console.log(nome, nome2);
}

// Let -- tem escopo de bloco { ... isso é um bloco ... }
// Var -- Só tem escopo de função
