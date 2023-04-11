#!/usr/bin/node
const x = process.argv
  .slice(2)
  .map(x => Number.parseInt(arg))
  .sort((a, b) => b - a);
const i = args.length < 2 ? 0 : args[1];

console.log(i);
