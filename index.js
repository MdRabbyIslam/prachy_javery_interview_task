//task 1

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor(value) {
    this.root = new Node(value);
  }
  insert(value) {
    const newNode = new Node(value);

    const seacrchTree = (node) => {
      //if value < node.value, go left
      if (value < node.value) {
        if (!node.left) {
          //if no left child, append node
          node.left = newNode;
        }
        //if left child exist, look left again
        else {
          seacrchTree(node.left);
        }
      }
      //if value > node.value , go right
      if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }
        //if right child, look right again
        else {
          seacrchTree(node.right);
        }
      }
    };

    seacrchTree(this.root);
  }

  //depth search

  //in order
  //left root right
  bstInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      result.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
}
