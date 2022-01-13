// return --> Retornar um valor. Toda vez que voce utilizar a palavra, sua função será encerrada

function retornar(a, b) {
  return a + b;
}

retornar();

// A função alert retorna undefined mas exibe algo na tela do usuario

function alerta() {
  alert("ola mundo");
  return;
}
alerta();

// Essa função não retorna nada mas executa uma ação

document.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}
const p1 = criaPessoa("Michel", "Silva");
const p2 = {
  nome: "Juliana",
  sobrenome: "Bastos",
};

console.log(p1);
console.log(p2);

// função dentro de função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + "" + resto;
  }
  return falaResto;
}

const fala = falaFrase("Ola");
const resto = fala("mundo!");
console.log(resto);

// funcao que retorna uma funcao

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
