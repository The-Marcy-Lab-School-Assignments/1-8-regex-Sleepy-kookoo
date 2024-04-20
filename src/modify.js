const swapAllCases = (str) => {
  return (str.replaceAll(/[a-zA-Z]/g, (match) => (/[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase())));
};

module.exports = {
  swapAllCases,
};
