// functions.js

export function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    throw new Error('String must not be empty');
  }

  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (string === '' || (typeof string !== 'string' && typeof string !== 'number')) throw new Error('string cannot be empty');

  if (typeof string === 'number') {
    string = string.toString();
  }
  return [...string].reverse().join('');
}

export const calculator = {

  validateInput(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('both arguments must be of type `number`');
  },

  add(num1, num2) {
    this.validateInput(num1, num2);
    return num1 + num2;
  },

  subtract(num1, num2) {
    this.validateInput(num1, num2);
    return num1 - num2;
  },

  divide(num1, num2) {
    this.validateInput(num1, num2);
    if (num2 === 0) throw new Error('division through 0');
    return num1 / num2;
  },

  multiply(num1, num2) {
    this.validateInput(num1, num2);
    return num1 * num2;
  },

};

export function caesarCipher(string, shiftFactor) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();

  let result = '';
  let alphabet = null;
  for (const character of string) {
    if (!lower.includes(character) && !upper.includes(character)) {
      result += character;
    } else {
      if (character === character.toLowerCase()) {
        alphabet = lower;
      } else {
        alphabet = upper;
      }

      result += alphabet[(alphabet.indexOf(character) + shiftFactor) % 26];
    }
  }

  return result;
}

export function analyzeArray(array) {
  const hasNonNumber = array.some((element) => typeof element !== 'number');

  if (hasNonNumber) throw new Error('array contains at least one non-number element');

  const sum = array.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);

  const length = array.length;

  const average = sum / length;

  const min = array.reduce((acc, cur) => (acc < cur ? acc : cur));

  const max = array.reduce((acc, cur) => (acc > cur ? acc : cur));

  return {
    average,
    min,
    max,
    length,
  };
}
