 #!/usr/bin/node
/**
 * tPrint - Print a string t times
 * @param {Number} t - The number of times to print the string.
 * @param {String} str - The string to  print.
 */
function tPrint (t, str) {
  if (Number.isNaN(t)) {
    console.log('Missing number of occurrences');
  } else if (t >= 0) {
    for (let i = 0; i < t; i++) {
      console.log(str);
    }
  }
}

tPrint(Number.parseInt(process.argv[2]), 'C is fun');

