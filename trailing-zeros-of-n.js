/*
Number of Trailing Zeros of N
https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

Write a program that will calculate the number of trailing zeros in a factorial of a given number n, without calculating the factorial.
*/
const zeros = n => {
    let num = 5, res = 0;
    while (num < n) {
        for (let i = num; i <= n; i += num) res++
        num *= 5;
    }
    return res;
};