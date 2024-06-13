/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    else {
      let depth = 1;
      function rec(n) {
        if (!n.left && !n.right) {
          return depth;
        }

        return Math.min(1 + rec(n.left), 1 + rec(n.right));
      }
      return rec(this.root);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    else {
      let depth = 1;
      function rec(n) {
        if (!n.left && !n.right) {
          return depth;
        }

        return Math.max(1 + rec(n.left), 1 + rec(n.right));
      }
      return rec(this.root);
    }
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // If tree is empty, just return 0
    if (!this.root) return 0;
  
    // Set to infinity to account for negative numbers (tree could be entirely negative)
    let maxSum = -Infinity;
  
    function rec(n) {
      // Base case, end of branch
      if (!n) return 0;
  
      // Recursively call left and right children
      // If a sum is negative, ignore
      const leftSum = Math.max(rec(n.left), 0);
      const rightSum = Math.max(rec(n.right), 0);
  
      // Calculate maximum sum
      const currentMax = n.val + leftSum + rightSum;
  
      // Update maximum sum
      maxSum = Math.max(maxSum, currentMax);
  
      // Return the maximum sum of the path that includes the current node
      return n.val + Math.max(leftSum, rightSum);
    }
  
    rec(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // Return null if tree is empty
    // No need to compare lowerBound if tree is empty
    if (!this.root) return null;
    // Else, go through normal trees
    else {
      const nums = [];
      function rec(n) {
        // Base case
        if (!n) {
          return;
        }

        // Current node is above lowerBound
        if (n.val > lowerBound) {
          // Now, push that val onto nums
          nums.push(n.val);

          // Go through children
          rec(n.left);
          rec(n.right);
        }

        // Otherwise, don't push val, but keep going through children
        rec(n.left);
        rec(n.right);
      }

      rec(this.root);
      nums.sort(function (a, b) {
        return a - b;
      });

      return nums[0] || null;
    }
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // --------------------------------------------------------------------------------------------------------

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
