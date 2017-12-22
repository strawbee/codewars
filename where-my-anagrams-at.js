/*
Where my Anagrams at?
https://www.codewars.com/kata/523a86aa4230ebb5420001e1

Given a string and an array of strings, our goal is to return an array of all anagrams of the initial string.
*/

const anagrams = (word, words) => {
  return words.filter(el => {
    for (let i in word) {
      let x = el.indexOf(word.charAt(i));
      if (x > - 1) el = el.slice(0, x) + el.slice(x + 1);
    }
    return !el;
  });
}
