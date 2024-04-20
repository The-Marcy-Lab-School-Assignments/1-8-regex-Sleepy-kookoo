const helloWorldRegex = (str) => /(hello world)/gi.test(str)


const hasAVowel = (str) => /[aeiou]/i.test(str);

const hasCatsOrDogs = (str) => /(cats|dogs)/i.test(str);

const hasVowelStart = (str) => /^[aeiou]/i.test(str);;

const hasPunctuationEnd = (str) => /[.?!]$/.test(str);

const hasNothingOrDigits = (str) => /^(\d+|)$/.test(str);

const hasNoFlippers = (str) => !/[BCcDEHIKOoXxl]/g.test(str);

const isValidEmail = (str) => {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(str);
};

const isValidPhoneNumber = (str) => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]+[0-9]{3}[-\s.]+[0-9]{4}$/.test(str);
};


const matchAllNumbers = (str) => {
  const numberMatch = /\d+/g
  const matches = str.match(numberMatch)
  if (matches) {
    return matches
  } else {
    return []
  }
};

const matchAllNumbersAsNumbers = (str) => {
  const numberMatch = /\d+/g
  const matches = str.match(numberMatch)
  if (matches) {
    return matches.map(Number)
  } else {
    return []
  }
};

const matchAllWords = (str) => {
  const wordMatch = /[a-zA-Z']+/g
  const word = str.match(wordMatch)
  if (word) {
    return word;
  } else {
    return [];
  }
};

const replaceAllNumbers = (str) => {
  return str.replace((/\d+/g), '???')
};

const fixFileName = (str) => {
  return str.replaceAll(/\s+/g, '_')
};

const nameRedacter = (str) => {
  return str.replace(/[A-Z]{2,}/g, "REDACTED")
};

const camelToSnakeCase = (str) => {
  return str.replace(/[A-Z]/g, '_$&').toLowerCase();
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
