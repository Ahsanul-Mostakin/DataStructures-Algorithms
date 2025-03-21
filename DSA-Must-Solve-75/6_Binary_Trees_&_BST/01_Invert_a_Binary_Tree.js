/* 1. Invert a Binary Tree 
   Problem: Given the root of a binary tree, invert it (swap every left and right child) and return the root. */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function arrayToTree(arr) {
  if (!arr.length || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function treeToArray(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) result.pop();
  return result;
}

function invertTreeBrute(root) {
  if (!root) return null;
  const nodes = [root];
  while (nodes.length) {
    const node = nodes.shift();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  return root;
}

// Optimal
function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

let root1 = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
invertTreeBrute(root1);
console.log(treeToArray(root1));

let root2 = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
invertTree(root2);
console.log(treeToArray(root2));
