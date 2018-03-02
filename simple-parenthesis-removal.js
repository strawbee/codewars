/*
Simple Parenthesis Removal
https://www.codewars.com/kata/simple-parenthesis-removal

Given a mathematical expression where the only operators are + or -, return the mathematical expression as a string with the parenthesis removed.

Example: solve("u-(v-w-(x+y))-z"); // returns "u-v+w+x+y-z"
*/

const solve = str => {
  let level = 0; obj = {}, res = '', prev = '';
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current === '(') {
      if (str[i - 1] === '-') {
        obj[i] = [];
        level++;
      }
      for (let j in obj) obj[j].push('(');
      prev = current;
      continue;
    }
    if (current === ')') {
      for (let j in obj) {
        if (obj[j].length) {
          obj[j].pop();
          if (!obj[j].length) {
            level--;
            delete obj[j];
          }
        }
      }
      prev = current;
      continue;
    }
    if (level % 2) {
      if (current === '+') {
          current = '-';
      }
      else if (current === '-') current = '+';
    }
    if (current === '+') {
      if (res[res.length - 1] === '+') res = res.slice(0, res.length - 1);
      else if (res[res.length - 1] === '-') {
        res = res.slice(0, res.length - 1);
        if (prev !== '(') current = '-';
      }
    }
    else if (current === '-') {
      if (res[res.length - 1] === '+') res = res.slice(0, res.length - 1);
      else if (res[res.length - 1] === '-') {
        res = res.slice(0, res.length - 1);
        if (prev !== '(') current = '+';
      }
    }
    prev = current;
    res += current;
  }
  if (res[0] === '+') res = res.slice(1);
  return res;
};