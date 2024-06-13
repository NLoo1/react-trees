/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    // Accumulator for rec()
    let totalSum = 0

    function rec(n){
      if(!n){
        return 0
      }
      totalSum = n.val
      for(let i=0; i<n.children.length; i++){
        totalSum+= rec(n.children[i])
      }
      return totalSum
    }
    return rec(this.root) 
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // Accumulator for rec()
    let count = 0

    function rec(n){
      if(!n) return 0
      else if(n.val % 2 ==0 ) count++

      for(let i=0; i<n.children.length; i++){
        rec(n.children[i])
      }
      return count
    }
    return rec(this.root)
    
  }
    
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    // Accumulator for rec()
    let count = 0

    function rec(n){
      if(!n) return 0
      else if(n.val > lowerBound ) count++

      for(let i=0; i<n.children.length; i++){
        rec(n.children[i])
      }
      return count
    }
    return rec(this.root)
  }
    
}

module.exports = { Tree, TreeNode };
