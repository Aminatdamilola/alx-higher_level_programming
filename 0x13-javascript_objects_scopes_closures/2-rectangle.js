#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w = parseInt(w)) > 0 && (h = parseInt(h))) {
      this.width = w;
      this.height = h;
    }
  }
}
module.exports = Rectangle;
