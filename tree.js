class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  print(node) {
    if (node.children.length > 0) {
      console.log(`Parent Node: ${node.data}`);
      console.log("Children Nodes:");
      for (let i = 0; i < node.children.length; i++) {
        this.print(node.children[i]);
      }
    } else {
      console.log(`Leaf Node ${node.data}`);
    }
  }
}

let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);
let n4 = new Node(40);
let n5 = new Node(50);
let n6 = new Node(60);
let n7 = new Node(70);
let n8 = new Node(80);

n1.children.push(n2);
n2.children.push(n3);
n3.children.push(n4);
n4.children.push(n5);
n5.children.push(n6);
n5.children.push(n7);
n5.children.push(n8);

let tree = new Tree(n1);
console.log(n1.children);
tree.print(tree.root);
