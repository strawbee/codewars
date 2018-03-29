/*
IP Validation
https://www.codewars.com/kata/ip-validation

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).
Input to the function is guaranteed to be a single string.
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
*/

const isValidIP = str => {
  let arr = str.split('.');
  return arr.length !== 4 ? false : arr.every(n => !(isNaN(n) || (n.length > 1 && n[0] === '0') || n.includes(' ') || Number(n) < 0 || Number(n) > 255));
};
