#!/usr/bin/node
function repeatFunction (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

module.exports = repeatFunction;