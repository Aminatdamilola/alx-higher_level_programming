#!/usr/bin/node

const square = require('./5-square');

class Square extends square {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}
 module.exports = Square; 
charPrint (c) {
    const char = c || 'X';
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += char;
      }
      console.log(row);
    }
  }
