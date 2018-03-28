/*
Huffman Encoding
https://www.codewars.com/kata/huffman-encoding

Given a string, write a function frequencies that outputs the frequency of each character in a string str in array form.
Example: frequencies('aaaabcc'); // returns [["a", 4], ["c", 2], ["b", 1]]

Next, write a function encode which takes in frequencies(str) as the first argument and the str as the second argument. Encode each character into bits using a binary tree format following huffman encoding principles.
* To build the tree, we turn each symbol into a leaf and sort them by their frequency. In every step, we remove 2 trees with the smallest frequency and put them under a node. This node gets reinserted and has the sum of the frequencies of both trees as new frequency. We are finished, when there is only 1 tree left.

Following the above example, where each left node is a 0 and each right node is a 1:
  .
 / \
a   .
   / \
  c   b

a would be represented by 0, c by 10, and b by 11. Therefore, the string 'aaaabcc' encoded would be 0000111010.

Finally, write a function decode which takes in frequencies(str) as the first argument and the code outputted by encode() as the second argument, and returns the decoded string.

Do not modify inputs.
*/


const frequencies = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  let arr = [];
  for (let i in obj) arr.push([i, obj[i]]);
  return arr.sort((a, b) => a[1] === b[1] ? a[0] > b[0] : b[1] - a[1]);
};

const encode = (arr, str) => {
  if (arr.length > 1 && !str) return str;
  if (arr.length < 2) return null;
  let tree = _buildTree(arr), obj = _buildCipher(tree), res = '';
  for (let i of str) res += obj[i];
  return res;
};

const decode = (arr, str) => {
  if (arr.length > 1 && !str) return str;
  if (arr.length < 2) return null;
  let tree = _buildTree(arr), obj = _buildCipherBackwards(tree), current = '', res = '';
  for (let i of str) {
    current += i;
    if (obj[current]) {
      res += obj[current];
      current = '';
    }
  }
  return res;
};

function Node(value = null, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function _buildTree(array) {
  let arr = array.slice();
  while (arr.length > 1) {
    let temp1 = arr.pop(), temp2 = arr.pop();
    let tempNode1, tempNode2;
    if (typeof temp1[0] === 'string') tempNode1 = new Node(temp1[0]);
    else tempNode1 = temp1[0];
    if (typeof temp2[0] === 'string') tempNode2 = new Node(temp2[0]);
    else tempNode2 = temp2[0];
    let tempNode = new Node(null, tempNode2, tempNode1);
    let temp = [tempNode, temp1[1] + temp2[1]];
    if (!arr.length) {
      arr = temp;
      break;
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        if (temp[1] >= arr[i][1]) {
          arr.splice(i, 0, temp);
          break;
        }
        else if (arr.length === 1) {
          arr.splice(1, 0, temp);
          break;
        }
      }
    }
  }
  return arr[0];
}

function _buildCipher(tree) {
  let obj = {};
  function _traverse(node, code = '') {
    if (!node.left && !node.right) obj[node.value] = code;
    if (node.left) _traverse(node.left, code + '0');
    if (node.right) _traverse(node.right, code + '1');
  }
  _traverse(tree);
  return obj;
}

function _buildCipherBackwards(tree) {
  let obj = {};
  function _traverse(node, code = '') {
    if (!node.left && !node.right) obj[code] = node.value;
    if (node.left) _traverse(node.left, code + '0');
    if (node.right) _traverse(node.right, code + '1');
  }
  _traverse(tree);
  return obj;
}