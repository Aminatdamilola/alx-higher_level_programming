#!/usr/bin/node

function searchSecondBiggestInteger (Args) {
  if (Args.length === 0) {
    console.log(0);
    return;
  } else if (Args.length === 1) {
    console.log(0);
    return;
  }

  let biggestnum = Number.MIN_SAFE_INTEGER;
  let secondbiggestnum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < Args.length; i++) {
    const current = parseInt(Args[i]);

    if (current > biggestnum) {
      secondbiggestnum = biggestnum;
      biggestnum = current;
    } else if (current > secondbiggestnum) {
      secondbiggestnum = current;
    }
  }

  console.log(secondbiggestnum);
}
const Args = process.argv.slice(2);
searchSecondBiggestInteger(Args);
