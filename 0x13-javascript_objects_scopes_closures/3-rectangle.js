#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let x = 0; x < this.height; x++) {
      let str = '';
      for (let f = 0; f < this.width; f++) {
        str += 'X';
      }
      console.log(str);
    }
  }
}

module.exports = Rectangle;
