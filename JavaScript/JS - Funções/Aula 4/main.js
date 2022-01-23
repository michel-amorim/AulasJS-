// Escopo léxico -> Toda função pode ter acesso a qualquer coisa dentro do escopo global

const nome = "Michel";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Otavio";
  falaNome();
}
falaNome();
