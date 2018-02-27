/*
First Operation Character
https://www.codewars.com/kata/challenge-fun-number-13-first-operation-character

"Given a string representing a valid arithmetic expression,  find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first."
The only expressions used are + and *. * takes precedence before +, and the expression is computed left to right.

Example: firstOperationCharacter("((2 + 2) * 2) * 3 + (2 + (2 * 2))"); // returns 28
*/

const firstOperationCharacter = str => {
    let n = 0, max = 0, res = [];
    for (let i in str) {
        str[i] === '(' ? n++ : str[i] === ')' ? n-- : null;
        if (n > max) max = n;
    }
    for (let i = 0; i < str.length; i++) {
        str[i] === '(' ? n++ : str[i] === ')' ? n-- : null;
        if (n === max) {
            if (str[i] === '*') return i;
            else if (str[i] === '+') res.push(i);
        }
    }
    return res[0];
};