/*
Valid Parentheses
https://www.codewars.com/kata/valid-parentheses

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
*/

const validParentheses = str => {
  let n = 0;
  for (let i of str) {
    if (i === '(') n++;
    else if (!n) return false;
    else n--;
  }
  return !n;
};