/*
Weight for Weight
https://www.codewars.com/kata/55c6126177c9441a570000cc

Given a string of numbers, return a string of the numbers organized by the sum of its digits, from smallest to largest. If the sum of the digits is equal to another number, class the numbers themselves as if they were strings and not digits ("smaller" strings come first).
*/

const orderWeight = str => {
    let obj = {}, result = '';
    str.split(' ').filter(el => el).forEach((el, ind) => {
        let sum = 0;
        for (let i in el) sum += Number(el[i]);
        obj[sum] ? obj[sum].push(el) : obj[sum] = [el];
    });
    for (let i in obj) result = result.concat(obj[i].sort().join(' '), ' ');
    return result.trim();
}