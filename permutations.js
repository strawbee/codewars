/*
Permutations
https://www.codewars.com/kata/permutations

Given a string, return an array of all possible permutations of the string, without duplicates.
*/

const permutations = str => {
  if (str.length < 2) return [str];
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) !== i) continue;
    let rest = str.slice(0, i) + str.slice(i + 1);
    let temp = permutations(rest);
    for (let j of temp) res.push(char + j);
  }
  return res;
};