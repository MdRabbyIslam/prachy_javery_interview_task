class Node {
  constructor() {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bST {
  constructor(value) {
    this.root = new Node(value);
  }
  insert(value) {
    let newNode = new Node(value);

    const searchTree = (node) => {
      if (node.value > newNode.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }
      if (node.value < newNode.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }
  bstInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(right);
      }
    };
    traverse(this.root);
    return result;
  }
}
