#!/usr/bin/node
const x = process.argv
  .slice(2)
  .map(arg => Number.parseInt(arg))
  .sort((a, b) => b - a);
const i = x.length < 2 ? 0 : x[1];

console.log(i);
