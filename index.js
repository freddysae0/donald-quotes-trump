const { quotes } = require("./quotes.js");
const { rollingHash } = require("./utils.js");

/**
 * Generates a random quote from the quotes array.
 *
 * @return {string} The randomly selected quote.
 */
function randomQuote() {
  // Generar un índice aleatorio
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Obtener el elemento aleatorio usando el índice
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

/**
 * Search for quotes about a given topic.
 *
 * @description
 * Search for quotes in the quotes array that contain the given topic.
 *
 * @param {string} topic The topic to search for.
 *
 * @return {object} An object with the following properties:
 * - quotes: An array of quotes that contain the topic.
 * - topic: The topic that was searched for.
 * - quantity: The number of quotes that contain the topic.
 */
function quoteAbout(topic) {
  const p = 31; // Primo grande
  const m = Math.pow(2, 32); // Módulo grande
  const topicHash = rollingHash(topic.toLowerCase(), p, m, 0);
  const topicLength = topic.length;
  const quotesArray = quotes.filter((quote) => {
    for (let i = 0; i <= quote.length - topicLength; i++) {
      const substringHash = rollingHash(
        quote.substring(i, i + topicLength).toLowerCase(),
        p,
        m,
        0
      );
      if (substringHash === topicHash) {
        return true; // La subcadena coincide con el hash del topic
      }
    }
    return false; // No se encontró el topic en la cadena
  });
  return {
    quotes: quotesArray,
    topic: topic,
    quantity: quotesArray.length,
  };
}

module.exports = {
  randomQuote,
  quoteAbout,
};
