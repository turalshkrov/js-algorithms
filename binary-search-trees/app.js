class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    this.arr = arr;
    this.sortedArr = this.#arrSort()
    this.root = this.buildTree(this.sortedArr);
  }

  buildTree(arr) {
    const mid = Math.floor(arr.length / 2);
    return arr[mid];
  }

  #arrSort() {
    for (let i = 0; i < this.arr.length; i++) {
      const elementI = this.arr[i];
      for (let j = i + 1; j < this.arr.length; j++) {
        const elementJ = this.arr[j];
        if (elementI === elementJ) {
          this.arr = this.arr.filter((_, index) => index !== j)
        }
      }
    }
    return this.arr.sort((a, b) => a - b)
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree.root);