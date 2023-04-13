#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let m = 0; m < this.height; m++) {
      let str = '';
      for (let n = 0; n < this.width; n++) {
        str += c;
      }
      console.log(str);
    }
  }
}

module.exports = Square;
