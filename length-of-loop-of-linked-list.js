/*
Loop of Linked List
https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.
*/

const loop_size = head => {
  let walker = head, runner = head, size = 0;
  do {
    walker = walker.next;
    runner = runner.next.next;
  } while (walker !== runner);
  do {
    walker = walker.next;
    size++;
  } while (walker !== runner);
  return size;
};