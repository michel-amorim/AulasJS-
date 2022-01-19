// Metodos uteis para Promises

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, temp) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("CAI NO ERRO");
      return;
    }

    setTimeout(() => {
      resolve(msg + " - Passei na promise");
      return;
    }, temp);
  });
}

// promise.all -->

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 1", 500),
  esperaAi("Promise 1", 1000),
  esperaAi(1000, 1000),
  "Outro valor",
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
