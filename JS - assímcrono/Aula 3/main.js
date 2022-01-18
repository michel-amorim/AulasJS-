// Async / Await

function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

// Abaixo verá o async e o await que veio para deixar todo Promise resumido e com menos codigo

// voce só consegue usar o Await se nomear sua function com async

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);

    console.log("Terminamos na fase", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

/*

Estado das Promise

pending --> pendente --> estado inicial
fullfilled --> resolvida
rejected --> rejeitada

*/
