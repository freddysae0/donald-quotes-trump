// Función de hashing para subcadenas
function rollingHash(s, p, m, h) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * p + s.charCodeAt(i)) % m;
  }
  return hash;
}

module.exports = {
  rollingHash,
};
