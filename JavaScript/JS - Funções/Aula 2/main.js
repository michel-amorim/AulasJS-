function funcao() {
  console.log(arguments[10]); // paranmetro de uma funcao
}

funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Luiz");

// quando defenido uma função com a palavra function existe uma variavel disponivel chamada argumensts. Tudo que é enviado é sustentado e voce tem acesso ao valor pelo indece respectivo

function funcao2() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Se caso não encontrar valor terá undefined

function funcao3(a, b, c, d) {
  console.log(a, b, c, d);
}

funcao3(1, 2);

//

function funcao4(a, b) {
  b = b || 2;
  console.log(a + b);
}

funcao4(2);

// Jeito moderno para resolver problema

function funcao5(a, b = 2) {
  console.log(a + b);
}

funcao5(2);

// unica maneira que se tem para pular algum valor é colocando undefined

function funcao6(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcao6(2, undefined, 20);

// Utilizando atribuição por desestruração

function funcao7({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

funcao7({ nome: "Michel", sobrenome: "Silva", idade: 20 });

//

const conta = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
};

conta("-", 0, 20, 30, 40, 50);
conta("+", 0, 20, 30, 40, 50);
conta("*", 1, 20, 30, 40, 50);
conta("/", 1, 20, 30, 40, 50);
