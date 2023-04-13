#!/usr/bin/node
function RepeatFunction () {}

RepeatFunction.prototype.execute = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};
