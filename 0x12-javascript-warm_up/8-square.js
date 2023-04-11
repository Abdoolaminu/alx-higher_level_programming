#!/usr/bin/node
/**
 * Square - Prints a Square with 'X'.
 * @param {Number} size - The size of the Square.
 */
function Square (size) {
  if (Number.isNaN(size)) {
    console.log('Missing size');
  } else if (size >= 0) {
    const s= new Array(size);
    for (let i = 0; i < size; i++) {
      s.push('X');
    }
    let S = new Array(size);
    S = S.fill(s.join(''), 0, size);
    console.log(S.join('\n'));
  }
}

Square(Number.parseInt(process.argv[2]));

