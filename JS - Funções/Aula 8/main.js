// Funções fábricas (Factory Functions -> this) -> fabrica objetos

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "falando sobre NADA") {
      return `${this.nome} tem ${assunto}`;
    },

    altura: a,
    peso: p,

    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p1 = criaPessoa("Luiz", "Otávio", 1.8, 80);
const p2 = criaPessoa("Michel", "Silva", 1.9, 100);
p1.nomeCompleto = "Michel Silva Amorim";

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
//
