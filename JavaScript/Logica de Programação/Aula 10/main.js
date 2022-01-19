// Diferençça entre Let e Var

// let nome = "Luiz";
// let nome = "Otavio";

// não pode redeclarar let no mesmo escopo: typeErro: Identifier 'nome' has already been declared

var nome2 = "Luiz";
var nome2 = "Michel"; // redeclarando VAR

// Var pode ser redeclarada dentro do mesmo escopo normalmente

const verdadeira = true;

if (verdadeira) {
  let nome = "Silva";
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Julian";
    console.log(nome, nome2);
  }
}

// Let -- tem escopo de bloco { ... isso é um bloco ... }
// Var -- Só tem escopo de função

function falaOi() {
  var nome3 = "Pedro";
  if (verdadeira) {
    let nome4 = "Amorim";
    console.log(nome4);
  }
}

falaOi();

//

console.log(sobrenome);
var sobrenome = "Miranda";
