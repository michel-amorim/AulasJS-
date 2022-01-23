// Closures

function retorna() {
  const nome1 = "Michel";
  return function () {
    return nome1;
  };
}

const retornaFun = retorna();
console.log(retornaFun());

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("João");

console.log(funcao());
console.log(funcao2());
