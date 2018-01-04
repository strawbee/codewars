/*
Instant Runoff Voting
https://www.codewars.com/kata/instant-runoff-voting/javascript

Given an array of arrays with each sub-array representing a ballot, we are to calculate the election winner using Instant Runoff Voting algorithm. From the kata description:
"Each voter selects several candidates in order of preference.
The votes are tallied from the each voter's first choice.
If the first-place candidate has more than half the total votes, they win.
Otherwise, find the candidate who got the least votes and remove them from each person's voting list.
In case of a tie for least, remove all of the tying candidates.
In case of a complete tie between every candidate, return nil(Ruby)/None(Python)/undefined(JS).
Start over.
Continue until somebody has more than half the votes; they are the winner.
Your function will be given a list of voter ballots; each ballot will be a list of candidates (symbols) in descending order of preference. You should return the symbol corresponding to the winning candidate."

Also: Only one winner can be selected; in case of a first-place tie, continue to eliminate candidates with least votes.

I think my solution is a little lengthy and it may be worth looking into refactoring at some point!
*/

const runoff = arr => {
  while(1) {
    let obj = {};
    arr[0].forEach(el => obj[el] = 0);
    arr.forEach(el => obj[el[0]]++);
    let maxVotes = Math.max.apply(null, Object.values(obj)), count = 0;
    for (let i in obj)
      if (obj[i] === maxVotes) count++;
    if (maxVotes > arr.length / 2 && count === 1) {
      for (let i in obj)
        if (obj[i] === maxVotes) return i;
    }
    else {
      let minVotes = Math.min.apply(null, Object.values(obj));
      for (let i in obj) {
        if (obj[i] === minVotes)
          arr.forEach((el, index) => arr[index] = el.filter(e => e !== i));
      }
    }
    if (!arr[0][0]) return 'undefined';
  }
}
