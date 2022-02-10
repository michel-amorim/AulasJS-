// difineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // como true mostra a chave
    value: estoque, // valor da chave
    writable: false, // pode alterar ou não o valor
    configurable: true, // pode reconfigurar ou apagar a chave ou não
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
