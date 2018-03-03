/*
Find the Parity Outlier
https://www.codewars.com/kata/find-the-parity-outlier/javascript

Given an array of integers with length >= 3, find the sole even or odd "outlier" integer.
*/

const findOutlier = arr => {
    let mod = ((arr[0] + arr[1]) % 2) ? !(arr[2] % 2) : !(arr[0] % 2);
    return arr.find(n => !(n % 2) !== mod);
}