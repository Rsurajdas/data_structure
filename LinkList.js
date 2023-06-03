class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null);
    this.size = 0;
  }

  // initially front is null
  insertFront(value) {
    const newNode = new Node(value, this.front);
    this.front = newNode;
    this.size++;
  }

  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  print() {
    let holder = this.front;
    // console.log(holder);
    while (holder.next !== null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  insert(value, index) {
    if (index > this.size) {
      console.log("Index out of Range");
    } else {
      if (index === 0) {
        this.insertFront(value);
      } else {
        let holder = this.front;
        let i = 0;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        const newNode = new Node(value, holder.next);
        holder.next = newNode;
        this.size++;
      }
    }
  }

  delete(index) {
    if (index > this.size) {
      console.log("Index out of Range");
    } else {
      if (index === 0) {
        this.insertFront(value);
      } else {
        let holder = this.front;
        let i = 0;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  length() {
    console.log(this.size);
  }
}

let list = new LinkedList();
list.insertFront(10);

list.insertFront(20);
list.insertFront(30);
list.insertFront(40);
list.insert(50, 3);
list.insert(60, 4);
list.deleteFront();

list.delete(3);
list.print();
list.length();
