class Node {
  // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // The tree has only one property which is its root node
  constructor(root) {
    this.root = null;
  }
  // The insert method takes a value as parameter and inserts the value in its corresponding place within the tree
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // The find method takes a value as parameter and iterates through the tree looking for that value
  // If the value is found, it returns the corresponding node and if it's not, it returns undefined
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    if (!found) return false;
  }

  print(value) {
    if (this.root == null) return false;
    let current = this.root;
    let found = false;
    let route = [];
    while (current && !found) {
      if (value < current.value) {
        route.push(current.value);
        current = current.left;
      } else if (value > current.value) {
        route.push(current.value);
        current = current.right;
      } else {
        route.push(current.value);
        found = true;
      }
    }
    return route;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(8);
tree.insert(15);
tree.insert(16);
console.log(tree.print(8));
