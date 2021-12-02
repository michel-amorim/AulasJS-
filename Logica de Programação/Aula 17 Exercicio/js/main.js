const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p"); // selecionando varios elementos

// pegando estilos computados pelo DOM

const estilosBody = getComputedStyle(document.body);

// pegando somente o background

const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "pink";
}
