/*
First Operation Character
https://www.codewars.com/kata/challenge-fun-number-13-first-operation-character

"Given a string representing a valid arithmetic expression,  find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first."
The only expressions used are + and *. * takes precedence before +, and the expression is computed left to right.

Example: firstOperationCharacter("((2 + 2) * 2) * 3 + (2 + (2 * 2))"); // returns 28
*/

const firstOperationCharacter = str => {
    let n = 0, max = 0, res = [];
    if (str.indexOf('(') === -1) return str.indexOf('*') > -1 ? str.indexOf('*') : str.indexOf('+');
    for (let i in str) {
        if (str[i] === '(') {
            n++;
            if (n > max) max = n;
        }
        else if (str[i] === ')') n--;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            n++;
            if (n === max) {
                let slice = str.slice(i, str.indexOf(')', i));
                if (slice.indexOf('*') > -1) return slice.indexOf('*') + i;
                else if (slice.indexOf('+') > -1) res.push(slice.indexOf('+') + i);
            }
        }
        else if (str[i] === ')') n--;
    }
    return res[0];
};