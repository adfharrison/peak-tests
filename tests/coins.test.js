const coins = require('../coins');

describe('coins', function () {
  test('returns 0 for single number array', function () {
    const input = [1];
    const expectedOutput = 0;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns 0 with array that need no changes', function () {
    const input = [0, 1, 0, 1];
    const expectedOutput = 0;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns 0 with long array that need no changes', function () {
    const input = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    const expectedOutput = 0;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns 1 with array that needs 1 change - starts with 1', function () {
    const input = [1, 0, 1, 0, 0];
    const expectedOutput = 1;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});
describe('coins', function () {
  test('returns 1 with array that needs 1 change - starts with 0', function () {
    const input = [0, 1, 0, 1, 1];
    const expectedOutput = 1;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns 1 with array that needs 1 change at start - starts with 1', function () {
    const input = [1, 1, 0, 1, 0];
    const expectedOutput = 1;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns 1 with array that needs 1 change at start - starts with 0', function () {
    const input = [0, 0, 0, 1, 0];
    const expectedOutput = 1;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns correct with array that needs multiple changes - A ', function () {
    const input = [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0];
    const expectedOutput = 5;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns correct with array that needs multiple changes - B ', function () {
    const input = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1];
    const expectedOutput = 8;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe('coins', function () {
  test('returns correct with array that needs multiple changes - C ', function () {
    const input = [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1];
    const expectedOutput = 9;
    const actualOutput = coins(input);
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});
