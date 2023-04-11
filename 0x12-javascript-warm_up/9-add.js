#!/usr/bin/node
/**
 * sum - Computes the sum of 2 digit
 * @param {Number} f - The first digit
 * @param {Number} s - The second digit
 *
 * @returns The sum of the 2 digits
 */
function sum (f, s) {
  return s + f;
}

console.log(
  sum(Number.parseInt(process.argv[2]), Number.parseInt(process.argv[3]))
);
