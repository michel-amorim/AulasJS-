// setinterval e setTimeout

function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

function funcaoDoIntervalo() {
  console.log(mostraHora());
}
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 5000);

setTimeout(function () {
  console.log("Ola mundo");
}, 5000);

// pra parar o loopinfinito digita ctrl + shift + p e digita: >stop code run ou ctrl + alt + m
