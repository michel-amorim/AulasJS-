const form = document.querySelector("#formulario");

form.addEventListener("Submit", function (e) {
  e.preventDefault();
  console.log("Evento previnido");
  setResultado("Olá Mundp!");
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaP();
}
