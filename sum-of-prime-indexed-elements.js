/*
Sum of Prime-Indexed Elements
https://www.codewars.com/kata/59f38b033640ce9fc700015b

Given an array of integers, return the sum of the prime indexed elements.
*/

const total = arr => {
    let sum = 0;
    for (let i = 2; i < arr.length; i++) {
        let sqrt = Math.floor(Math.sqrt(i));
        let prime = true, mod = 2;
        while (mod <= sqrt) {
            if (!(i % mod)) {
                prime = false;
                break;
            }
            mod++;
        }
        if (prime) sum += arr[i];
    }
    return sum;
}