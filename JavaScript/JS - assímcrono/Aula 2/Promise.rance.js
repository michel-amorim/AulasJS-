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

// promise.race --> a primeira que resolver voce me entrega o resultado

const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500), // <-- primeiro valor
  esperaAi("Promise 3", 1000),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
