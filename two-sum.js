/*
Two Sum
https://www.codewars.com/kata/two-sum/train/javascript

Given an array of integers and a target sum, output the indices of two numbers in the input array that add up to the target.

Example: twoSum([1,2,3], 4)
Output is: [0,2]
*/

const twoSum = (arr, target) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] !== undefined) return [hash[arr[i]],i];
    else hash[target - arr[i]] = i;
  }
}
