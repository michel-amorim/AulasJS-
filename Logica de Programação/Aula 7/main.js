// Date

const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(0 + tresHoras); // 01/01/1970 = Timestamp ou época unix
console.log(data.toString());

const data2 = new Date(1997, 0, 16, 12, 40, 15, 500); // Ano, mês, dia, hora, minuto, segundos, ms
console.log(data2.toString());

const dataMaisUtilizado = new Date("2019-04-20 20:20:59"); // Formato mais utilizado
console.log(dataMaisUtilizado.toString());
console.log("Dia", dataMaisUtilizado.getDate()); // Achar o dia
console.log("Mês", dataMaisUtilizado.getMonth()); // Achar o mês
console.log("Ano", dataMaisUtilizado.getFullYear()); // Achar o Ano
console.log("Hora", dataMaisUtilizado.getHours()); // Achar o horas
console.log("Min", dataMaisUtilizado.getMinutes()); // Achar o minutos
console.log("Seg", dataMaisUtilizado.getSeconds()); // Achar o segundos
console.log("ms", dataMaisUtilizado.getMilliseconds()); // Achar o milesegundos
console.log("Dia semana", dataMaisUtilizado.getDay()); // Achar o dia da semana

//
// Ex: Formatando Data

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(dataTest) {
  const dia = zeroAEsquerda(dataTest.getDate());
  const mes = zeroAEsquerda(dataTest.getMonth() + 1);
  const ano = zeroAEsquerda(dataTest.getFullYear());
  const hora = zeroAEsquerda(dataTest.getHours());
  const min = zeroAEsquerda(dataTest.getMinutes());
  const seg = zeroAEsquerda(dataTest.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}/${min}/${seg}/`;
}

const dataTest = new Date();
const dataBrasil = formataData(dataTest);
console.log(dataBrasil);
