/*
Fill In the Correct Arithmetic Expression
https://www.codewars.com/kata/581c02edc221fbabee0000e5

We are provided with an arithmetic expression where one or more operators are missing. Our goal is to fill in the correct operators. I solved this problem using a recursive function.

Example: 5 () 5 + 5 () 5 = 35
Answer: 5 (*) 5 + 5 (+) 5 = 35
*/

const correct = exp => {
  let right = Number(exp.slice(exp.indexOf('=') + 2));
  let left = exp.slice(0, exp.indexOf('=') - 1).split(' () ');
  let ans = [];

  const recurs = (n, math, history) => {
    if (n === left.length - 1 && eval(math) === right) {
        history = history.split(',');
        left.forEach((el, i) => ans.push(el + history[i]));
        return ans.join('').trim() + ' = ' + right;
    }
    else if (n === left.length - 1 && eval(left) !== right) return null;
    else return recurs(n + 1, math + ' + ' + left[n + 1], history + ' (+) ,') || recurs(n + 1, math + ' - ' + left[n + 1], history + ' (-) ,') || recurs(n + 1, math + ' * ' + left[n + 1], history + ' (*) ,') || recurs(n + 1, math + ' / ' + left[n + 1], history + ' (/) ,');
  }
  return recurs(0, left[0], '');
}
