/* 
 if -> se -- pode ser usado sozinho com a condição dele

 else -> se não, outra -- Não pode ser executado sozinho. Precisa de um if antes.
  Else if pode ser criado varias vezes.
 */

/*
  Entre 0 - 11 - Bom dia 
  Entre 12 - 17 - Boa tarde
  Entre 18 - 23 - Boa noie
  */

// Exemplos:

const hora = 18; // <- horas

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá");
}

//

const tenhoGrana = "";

if (tenhoGrana) {
  console.log("Vou sair de csa");
} else {
  console.log("Não vou sair de casa");
}
