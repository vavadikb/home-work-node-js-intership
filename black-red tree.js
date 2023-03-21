class Node {
  constructor(value) {
    this.value = value;
    this.color = "red";
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      newNode.color = "black";
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }

      this.fixTree(newNode);
    }
  }

  fixTree(node) {
    while (node.parent && node.parent.color === "red") {
      let parent = node.parent;
      let grandParent = parent.parent;

      if (grandParent && parent === grandParent.left) {
        let uncle = grandParent.right;

        if (uncle && uncle.color === "red") {
          grandParent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandParent;
        } else {
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          this.rotateRight(grandParent);
        }
      } else {
        let uncle = grandParent.left;

        if (uncle && uncle.color === "red") {
          grandParent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandParent;
        } else {
          if (node === parent.left) {
            this.rotateRight(parent);
            node = parent;
            parent = node.parent;
          }

          parent.color = "black";
          grandParent.color = "red";
          this.rotateLeft(grandParent);
        }
      }
    }

    this.root.color = "black";
  }

  remove(value) {
    let node = this.findNode(value);
    if (!node) return;

    if (!node.left || !node.right) {
      let child = node.left || node.right;

      if (node === this.root) {
        this.root = child;
        if (this.root) this.root.parent = null;
      } else {
        if (node === node.parent.left) {
          node.parent.left = child;
        } else {
          node.parent.right = child;
        }

        if (child) child.parent = node.parent;
        this.fixDelete(child, node.parent);
      }
    } else {
      let predecessor = this.maxNode(node.left);
      node.value = predecessor.value;
      this.remove(predecessor.value);
    }
  }
  rotateLeft(node) {
    let rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (!node.parent) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node) {
    let leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (!node.parent) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  maxNode(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
  fixDelete(node, parent) {
    while (node !== this.root && (!node || node.color === "black")) {
      if (node === parent.left) {
        let sibling = parent.right;

        if (sibling.color === "red") {
          sibling.color = "black";
          parent.color = "red";
          this.rotateLeft(parent);
          sibling = parent.right;
        }

        if (
          (!sibling.left || sibling.left.color === "black") &&
          (!sibling.right || sibling.right.color === "black")
        ) {
          sibling.color = "red";
          node = parent;
          parent = node.parent;
        } else {
          if (!sibling.right || sibling.right.color === "black") {
            sibling.left.color = "black";
            sibling.color = "red";
            this.rotateRight(sibling);
            sibling = parent.right;
          }

          sibling.color = parent.color;
          parent.color = "black";
          sibling.right.color = "black";
          this.rotateLeft(parent);
          node = this.root;
        }
      } else {
        let sibling = parent.left;

        if (sibling.color === "red") {
          sibling.color = "black";
          parent.color = "red";
          this.rotateRight(parent);
          sibling = parent.left;
        }

        if (
          (!sibling.left || sibling.left.color === "black") &&
          (!sibling.right || sibling.right.color === "black")
        ) {
          sibling.color = "red";
          node = parent;
          parent = node.parent;
        } else {
          if (!sibling.left || sibling.left.color === "black") {
            sibling.right.color = "black";
            sibling.color = "red";
            this.rotateLeft(sibling);
            sibling = parent.left;
          }

          sibling.color = parent.color;
          parent.color = "black";
          sibling.left.color = "black";
          this.rotateRight(parent);
          node = this.root;
        }
      }
    }

    if (node) node.color = "black";
  }
}
