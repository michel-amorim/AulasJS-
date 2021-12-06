// Exemplo 1 = switch

const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

function getNomeMes(numeroMes) {
  let nomeMes;

  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "Fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "Março";
      return nomeMes;
    case 3:
      nomeMes = "Abril";
      return nomeMes;
    case 4:
      nomeMes = "Maio";
      return nomeMes;
    case 5:
      nomeMes = "Junho";
      return nomeMes;
    case 6:
      nomeMes = "Julho";
      return nomeMes;
    case 7:
      nomeMes = "Agosto";
      return nomeMes;
    case 8:
      nomeMes = "Setembro";
      return nomeMes;
    case 9:
      nomeMes = "Outubro";
      return nomeMes;
    case 10:
      nomeMes = "Novembro";
      return nomeMes;
    case 11:
      nomeMes = "Dezembro";
      return nomeMes;
  }
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()}  de ${nomeMes}` +
    ` de ${data.getFullYear()} ` +
    `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criaData(data);

// O exemplo 2 não está funcionando! (pesquisar depois)

/*const h2 = document.querySelector(".container2 h2");
const d = new Date();

h2.innerHTML = d.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
}); */

//
// Exemplo 3
//

const h3 = document.querySelector(".container3 h3");
const d3 = new Date();

function getDiaSemanaTexto3(diaSemana3) {
  const diasSemana3 = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
  ];
  return diasSemana3[diaSemana3];
}

function getNomeMes3(numeroMes3) {
  const meses3 = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses3[numeroMes3];
}

function zeroAEsquerda3(num3) {
  return num3 >= 10 ? num3 : `0${num3}`;
}

function criaData3(data3) {
  const diaSemana3 = data3.getDay();
  const numeroMes3 = data3.getMonth();

  const nomeDia3 = getDiaSemanaTexto3(diaSemana3);
  const nomeMes3 = getNomeMes3(numeroMes3);

  return (
    `${nomeDia3}, ${data3.getDate()}  de ${nomeMes3}` +
    ` de ${data3.getFullYear()} ` +
    `${zeroAEsquerda3(data3.getHours())}:${zeroAEsquerda3(data3.getMinutes())}`
  );
}

h3.innerHTML = criaData3(d3);
