// functions.test.js

import { capitalize, reverseString, calculator } from './functions';

describe('capitalize', () => {

test('word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('tree', () => {
  expect(capitalize('tree')).toBe('Tree');
});

test('dog', () => {
  expect(capitalize('dog')).toBe('Dog');
});

test('not a string throws', () => {
  expect(() => capitalize(1)).toThrow(Error);
});

test('empty string throws', () => {
  expect(() => capitalize('')).toThrow(Error);
});

});

describe('reverseString', () => {

test('word', () => {
  expect(reverseString('word')).toBe('drow');
});

test('tree', () => {
  expect(reverseString('tree')).toBe('eert');
});

test('dog', () => {
  expect(reverseString('dog')).toBe('god');
});

test('case sensitivity', () => {
  expect(reverseString('WoRd')).toBe('dRoW');
});

test('numbers', () => {
  expect(reverseString(1234)).toBe('4321');
});

test('empty string throws', () => {
  expect(() => reverseString('')).toThrow(Error);
});

test('not a string (except number) throws', () => {
  expect(() => reverseString(['foo'])).toThrow(Error);
});

});

describe('calculator add', () => {

  test('accepts two positive integers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('accepts negative and positive', () => {
    expect(calculator.add(1, -2)).toBe(-1);
  })

  test('accept floating numbers', () => {
    expect(calculator.add(2.3, 2.4)).toBeCloseTo(4.7);
  });

  test('not a number throws', () => {
    expect(() => calculator.add('foo', 'bar')).toThrow(Error);
  });
});

describe('calculator subtract', () => {

  test('accepts two positive integers', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
  });

  test('accepts smaller integer as first argument', () => {
    expect(calculator.subtract(1,4)).toBe(-3);
  });

  test('accepts negative and positive', () => {
    expect(calculator.subtract(1, -2)).toBe(3);
  });

  test('accepts floating numbers', () => {
    expect(calculator.subtract(2.4, 2)).toBeCloseTo(0.4);
  });

  test('not a number throws', () => {
    expect(() => calculator.subtract('foo', 'bar')).toThrow(Error);
  });
});

describe('calculator divide', () => {

  test('accepts two integers, first argument is bigger', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('accepts two integers, second argument is bigger', () => {
    expect(calculator.divide(2, 6)).toBeCloseTo(0.33);
  });

  test('divide by 0 throws', () => {
    expect(() => calculator.divide(2, 0)).toThrow(Error);
  })

  test('not a number throws', () => {
    expect(() => calculator.divide('foo', 'bar')).toThrow(Error);
  });
})

describe('calculator multiply', () => {

  test('accepts two integers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  
  test('accepts negative and positive', () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
  });

  test('accepts floating numbers', () => {
    expect(calculator.multiply(2.4, 2.3)).toBeCloseTo(5.52);
  });
  test('not a number throws', () => {
    expect(() => calculator.multiply('foo', 'bar')).toThrow(Error);
  });
});
