/*
Escreva uma função chamada Epaisagem que recebe dois argumentos,, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem
*/

function ePaisagem(largura, altura) {
  return largura >= altura ? true : false;
}

console.log(ePaisagem(1920, 1920));

const ePaisagem2 = (largura, altura) => largura >= altura;

console.log(ePaisagem2(1080, 1920));
