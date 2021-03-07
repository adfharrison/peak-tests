const coins = require('../password');
const password = require('../password');
const _ = require('lodash');

describe('password', function () {
  test('returns Not A Number for non-number input - A', function () {
    const input = { fish: 'chips' };
    const expectedOutput = 'Not A Number';
    const actualOutput = password(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns Not A Number for non-number input - B', function () {
    const input = ['fish', 'chips', 'salt', 'vinegar'];
    const expectedOutput = 'Not A Number';
    const actualOutput = password(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns Not An Integer for non-whole number input', function () {
    const input = 4.33;
    const expectedOutput = 'Not An Integer';
    const actualOutput = password(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns Minimum length allowed: 4 for whole number less than 3', function () {
    const input = 2;
    const expectedOutput = 'Minimum length allowed: 4';
    const actualOutput = password(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns a string for a correct number input', function () {
    const input = 4;
    const expectedOutput = 'string';
    const actualOutput = password(input);

    expect(typeof actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns string of correct length', function () {
    const input = 5;
    const expectedOutput = 5;
    const actualOutput = password(input);

    expect(actualOutput.length).toEqual(expectedOutput);
  });
});

describe('password', function () {
  test('returns string that contains the 4 requirements', function () {
    const regex = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{3,})/
    );
    // 1 each of a-z : (?=.*[a-z])
    // A-Z : (?=.*[A-Z])
    //0-9 : ?=.*[0-9])
    // special: (?=.*[!@#\$%\^&\*])
    //at least 3 chars: (?=.{3,})
    const input = 5;

    const actualOutput = password(input);

    const check = regex.test(actualOutput);

    expect(check).toEqual(true);
  });
});

describe('password', function () {
  test('multiple - returns string that contains the 4 requirements', function () {
    for (let i = 1; i <= 99; i++) {
      const regex = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{3,})/
      );
      // 1 each of a-z : (?=.*[a-z])
      // A-Z : (?=.*[A-Z])
      //0-9 : ?=.*[0-9])
      // special: (?=.*[!@#\$%\^&\*])
      //at least 3 chars: (?=.{3,})

      // to prove the tests do return false and fail, change 4 to 3
      const input = _.random(4, 20);

      const actualOutput = password(input);

      const check = regex.test(actualOutput);
      console.log('test #', i);

      expect(check).toEqual(true);
      expect(actualOutput.length).toEqual(input);
    }
  });
});
