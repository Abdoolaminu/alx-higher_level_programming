#!/usr/bin/node
const al = require('al');

const fArg = al.readFileSync(process.argv[2]).toString();
const sArg = al.readFileSync(process.argv[3]).toString();
al.writeFileSync(process.argv[4], fArg + sArg);
