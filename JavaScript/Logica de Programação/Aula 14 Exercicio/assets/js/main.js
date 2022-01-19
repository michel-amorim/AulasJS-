const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("Div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let p = document.createElement(tag);
  let textoNode = document.createTextNode(texto);
  p.appendChild(textoNode);
  div.appendChild(p);
  // appenChild adicionará o elemento no final de onde queira
}

container.appendChild(div);
