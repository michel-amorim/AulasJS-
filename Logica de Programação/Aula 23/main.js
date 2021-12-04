// Tratando e lançando erros (try, catch, throw)

// try -- tente executar isso daqui, caso ocorra qualquer eu quero que caia no bloco catch

console.log("");

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y prcisam ser números");
  }
  return x + y;
}

try {
  console.log(soma("1", 2));
} catch (error) {
  console.log(error);
}
