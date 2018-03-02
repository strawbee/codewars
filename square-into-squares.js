/*
Square Into Squares
https://www.codewars.com/kata/square-into-squares-protect-trees

Given a number, return a sorted array of numbers that adds up to the number squared. If there are multiple solutions, return the result with the largest possible values.

Example: decompose(11); // returns [1, 2, 4, 10]
*/

const decompose = (n, total = n * n, arr = []) => {
    if (total === 0) return arr.sort((a, b) => a - b);
    while (n > 0) {
        n--;
        let newArr = [...arr, n], newTotal = total - n * n;
        if (newTotal >= 0) {
            let result = decompose(n, newTotal, newArr);
            if (result) return result;
        }
    }
    return null;
};