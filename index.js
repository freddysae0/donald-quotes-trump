const { quotes } = require("./quotes.js");

function randomDonaldQuote() {
  // Generar un índice aleatorio
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Obtener el elemento aleatorio usando el índice
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

module.exports = {
  randomDonaldQuote,
};
