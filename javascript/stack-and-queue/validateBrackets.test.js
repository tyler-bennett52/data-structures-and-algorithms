'use strict';

const validateBrackets = require('./validateBrackets');

describe('Validate brackets method', () => {
  it('Returns true/false based on valid bracket pairs', () => {
    expect(validateBrackets('{}(){}')).toBeTruthy();
    expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
    expect(validateBrackets('string')).toBeTruthy();
    expect(validateBrackets('[({}]')).toBeFalsy();
    expect(validateBrackets('(](')).toBeFalsy();
  });
});
