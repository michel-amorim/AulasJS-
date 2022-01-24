const html = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const lookahead = `Frase atenção1.
Frase atenção2.
Alguma coisa atenção3. Alguma coisa atenção4,
Luiz Otávio
Otávio Miranda
João Otávio
Gabriel Otávio
Gabriel Miranda
`;

//
//
//
//

module.exports = {
  html,
  lookahead,
}; // exportanto pelo Node.JS
