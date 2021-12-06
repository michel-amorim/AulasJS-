function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.add("zerarBlue");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      relogio.classList.remove("zerarBlue");
      clearInterval(timer);
      iniciaRelogio();
    }
    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
  });
}
relogio();
