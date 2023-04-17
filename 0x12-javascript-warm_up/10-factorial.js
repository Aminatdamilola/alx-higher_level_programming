#!/usr/bin/node

function Factorial (n) {
  if (isNaN(n)) {
    return 1;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}

const fact = parseInt(process.argv[2]);
const outcome = Factorial(fact);
console.log(outcome);
