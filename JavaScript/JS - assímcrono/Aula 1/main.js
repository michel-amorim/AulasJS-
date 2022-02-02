// Promisses
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Promisses -- Promessa
function esperaAi(msg, temp) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "String") reject(new Error("ERRO"));

    setTimeout(() => {
      resolve(msg);
    }, temp);
  });
}

esperaAi("Conexão com o base de dados", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3))
      .then((resposta) => {
        console.log(resposta);
        return esperaAi("tratando os dados da BASE", rand(1, 3));
      })
      .then(() => {
        console.log("Exibe dados na tela");
      });
  })
  .catch((e) => {
    console.log("Erro", e);
  });

console.log("Isso aqui será exibido antes de qualquer promisse");

// resolve -> Esse codigo execcutou com sucesso então resolve ele para mim

// reject -> Deu um erro no codigo, rejeita isso para mim
