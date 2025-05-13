// functions.js

export function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    throw new Error('String must not be empty');
  }

  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (string === '' || (typeof string !== 'string' && typeof string !== 'number')) throw new Error ('string cannot be empty');

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
    if(num2 === 0)
      throw new Error('division through 0');
    return num1 / num2
  },

  multiply(num1, num2) {
    this.validateInput(num1, num2);
    return num1 * num2;
  },


};
