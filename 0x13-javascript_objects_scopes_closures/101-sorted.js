#!/usr/bin/node
const dict = require('./101-data.js').dict;

const totalist = Object.entries(dict);
const v = Object.values(dict);
const m = [...new Set(v)];
const newDict = {};
for (const i in m) {
  const list = [];
  for (const k in totalist) {
    if (totalist[k][1] === m[i]) {
      list.unshift(totalist[k][0]);
    }
  }
  newDict[m[i]] = list;
}
console.log(newDict);
