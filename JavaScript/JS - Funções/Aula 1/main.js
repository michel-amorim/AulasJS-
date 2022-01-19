// Maneiras de declarar funções

// Declaração de funções (function hoistings)

function falaOi() {
  console.log("Oie");
}

falaOi();

// First-class objects (objetos de primeira classe)

const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

// Arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();

// Dentro de um objeto eu posso ter uma função

const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
}; // Primeira maneira para escrever essa função

const obj2 = {
  falar() {
    console.log("Estou falando...");
  },
}; // Segunda maneira para escrever essa função

obj.falar();
obj2.falar();
