#!/usr/bin/node

function add (a, b) {
  return a + b;
}

const Int1 = parseInt(process.argv[2]);
const Int2 = parseInt(process.argv[3]);

const outcome = add(Int1, Int2);

// console.log('The sum of ${Int1} and ${Int2} is ${outcome}.');
console.log(outcome);
