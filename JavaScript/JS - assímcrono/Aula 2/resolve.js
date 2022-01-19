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
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Pagina em cache");
  } else {
    return esperaAi("Baixei a pagina", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));
