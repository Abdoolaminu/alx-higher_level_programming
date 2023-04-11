#!/usr/bin/node
/**
 * fact - Computes the factorial of a number.
 * @param {Number} number - The number.
 *
 * @returns The factorial of the number.
 */
function fact (number) {
  if (Number.isNaN(number) || (number <= 0)) {
    return 1;
  } else {
    return number * fact(number - 1);
  }
}

console.log(fact(Number.parseInt(process.argv[2])));
