'use strict';

const { Stack } = require('./index');

function validateBrackets(string) {
  const openerStack = new Stack();
  const closerStack = new Stack();
  const openerArray = [ '{', '(', '['];
  const closerArray = [ '}', ')', ']'];
  for (let char of string) {
    openerArray.includes(char) ? openerStack.push(char) : null;
    closerArray.includes(char) ? closerStack.push(char) : null;
  }
  if (openerStack.length !== closerStack.length) return false;
  for (let i = 0; i < openerStack.length; i++) {
    let currOpener = openerStack.pop();
    let currCloser = closerStack.pop();
    if (openerArray.indexOf(currOpener) !== closerArray.indexOf(currCloser)) return false;
  }
  return true;
}





module.exports = validateBrackets;
