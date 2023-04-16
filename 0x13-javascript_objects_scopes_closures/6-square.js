#!/usr/bin/node

const square = require('./5-square');

class Square extends square {
  charPrint (c) {
    const char = c || 'X';
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += char;
      }
      console.log(row);
    }
  }
}
module.exports = Square;
