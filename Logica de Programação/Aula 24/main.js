// tratando e lançando erros (try, catch, finally)

try {
  // É executado quando não há erros
} catch {
  // É executado quando há erros
} finally {
  // sempre
}

try {
  console.log(a); // erro
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (e) {
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}

console.log("");

// Exemplo para erros

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instâcia de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-Br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  // tratar erro
} finally {
  console.log("Tenha um bom dia");
}
