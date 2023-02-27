'use strict';

function countDown(num) {
  if (num === 0) {
    console.log('ALL DONE');
    return;
  }
  console.log(num);
  countDown(num - 1);
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function countOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}


function fib(num) {
  if (num < 3) {
    return 1;
  }
  return fib(num-1) + fib(num-2);
}

const numsArray = [];
for (let i = 0; i < 100; i++) {
  numsArray.push(i);
}

// console.log(factorial(8));
console.log(fib(10));
