/*
Human Readable Duration Format 
https://www.codewars.com/kata/52742f58faf5485cae000b9a

In this problem, we create a function that takes in a non-negative integer of seconds and return a string representing the number of seconds in a human readable format. The string takes into account, if applicable, the number of years, days, hours, minutes, and seconds, separated by a comma and a space. The last component is separated by an "and."

Example: formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
*/

const formatDuration = seconds => {
  const time = [
    {name: 'second', number: seconds % 3153600 % 86400 % 3600 % 60},
    {name: 'minute', number: Math.floor(seconds % 3153600 % 86400 % 3600 / 60)},
    {name: 'hour', number: Math.floor(seconds % 31536000 % 86400 / 3600)},
    {name: 'day', number: Math.floor(seconds % 31536000 / 86400)},
    {name: 'year', number: Math.floor(seconds / 31536000)}
  ]
  let arr = [];
  let s, and, print;

  if (!seconds) return 'now';

  time.forEach(obj => {
    if (obj.number) {
      s = (obj.number === 1) ? obj.name : `${obj.name}s`;
      if (arr.length === 1) and = ' and ';
      else if (arr.length > 1) and = ', ';
      else and = '';
      print = `${obj.number} ${s}${and}`;
      arr.unshift(print);
    }
  });

  return arr.join('');
}
