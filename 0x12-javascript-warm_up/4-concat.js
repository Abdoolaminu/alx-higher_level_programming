#!/usr/bin/node
const mynumber = Number.parseInt(process.argv[2]);

console.log(Number.isNaN(mynumber) ? 'Not a number' : 'My number: ' + mynumber);
