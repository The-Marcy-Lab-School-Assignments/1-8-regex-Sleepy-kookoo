const helloWorldRegex = (str) => /(hello world)/gi.test(str)


const hasAVowel = (str) => /[aeiou]/i.test(str);

const hasCatsOrDogs = (str) => /(cats|dogs)/i.test(str);

const hasVowelStart = (str) => /^[aeiou]/i.test(str);;

const hasPunctuationEnd = (str) => /[.?!]$/.test(str);

const hasNothingOrDigits = (str) => /^(\d+|)$/.test(str);

const hasNoFlippers = (str) => { };

const isValidEmail = (str) => { };

const isValidPhoneNumber = (str) => { };

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

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
