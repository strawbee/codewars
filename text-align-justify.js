/*
Text Align Justify
https://www.codewars.com/kata/text-align-justify

 * @param {String} str - inital string
 * @param {Number} len - line length

Here are the rules:

* Use spaces to fill in the gaps between words.
* Each line should contain as many words as possible.
* Use '\n' to separate lines.
* Gap between words can't differ by more than one space.
* Lines should end with a word not a space.
* '\n' is not included in the length of a line.
* Large gaps go first, then smaller ones: 'Lorem---ipsum---dolor--sit--amet' (3, 3, 2, 2 spaces).
* Last line should not be justified, use only one space between words.
* Last line should not contain '\n'
* Strings with one word do not need gaps ('somelongword\n').
*/

const justify = (str, len) => {
  let lines = [], res = '';
  while (str.length > len) {
    let lastSpace = str.slice(0, len + 1).lastIndexOf(' ');
    lines.push(str.slice(0, lastSpace));
    str = str.slice(lastSpace + 1);
  }
  for (let i of lines) {
    if (i.indexOf(' ') === -1) res += i + '\n';
    else {
      let splitLine = i.split(' ');
      let spaces = len - i.length + splitLine.length - 1;
      let perWord = ~~(spaces / (splitLine.length - 1)), plusOne = spaces % (splitLine.length - 1);
      for (let j = 0; j < splitLine.length - 1; j++) {
        res += splitLine[j];
        for (let k = 0; k < perWord; k++) res += ' ';
        if (plusOne > 0) {
          res += ' ';
          plusOne--;
        }
      }
      res += splitLine[splitLine.length - 1] + '\n';
    }
  }
  return res += str;
};