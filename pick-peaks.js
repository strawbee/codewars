/*
Pick Peaks
https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

Find all numeric "peaks" in an array and return an object with "pos" and "peaks" keys containing array values. In case of plateaus, return the position of the first value.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 3, 3, 2, 1, 2, 3]); // returns {pos: [3, 7], peaks: [6, 3]}
*/

const pickPeaks = arr => {
    let res = {pos: [], peaks: []}, a = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;
        a.push([arr[i], i])
    }
    for (let i = 1; i < a.length - 1; i++) {
        if (a[i - 1][0] < a[i][0] && a[i][0] > a[i + 1][0]) {
            res.pos.push(a[i][1]);
            res.peaks.push(a[i][0]);
        }
    }
    return res;
};