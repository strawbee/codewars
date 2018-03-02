/*
The Soul of Wit: Reverse an Array
https://www.codewars.com/kata/the-soul-of-wit-reverse-an-array/train/javascript

Reverse an array in 30 characters without using the array.prototype.reverse() method.
*/

reverse=a=>[...a].map(a.pop,a)