class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  // initially front is null
  insertFront(value) {
    const newNode = new Node(value, null, null);
    if (this.size === 0) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  print() {
    let holder = this.front;
    // console.log(holder);
    while (holder !== null) {
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
        const newNode = new Node(value, holder.next, holder);
        if (holder.next !== null) {
          holder.next.prev = newNode;
        }
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
        this.deleteFront();
      } else {
        let holder = this.front;
        let i = 0;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }
        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  length() {
    console.log(this.size);
  }

  printReverse() {
    var holder = this.rear;

    while (holder.prev != null) {
      console.log(holder.value);
      holder = holder.prev;
    }
  }

  reverseList() {
    let temp;
    let holder = this.front;
    while (holder !== null) {
      temp = holder.prev;
      holder.prev = holder.next;
      holder.next = temp;
      holder = holder.prev;
    }
    if (temp != null) {
      this.front = temp.prev;
    }
  }

  isPalindrome() {
    let frontHolder = this.front;
    let rearHolder = this.rear;
    let left = 0;
    let right = this.size - 1;
    let valid = true;

    while (valid && left < right) {
      if (frontHolder.value !== rearHolder.value) {
        valid = false;
      }
      left++;
      right--;
      frontHolder = frontHolder.next;
      rearHolder = rearHolder.prev;
    }
    return valid;
  }

  printMiddle() {
    let slow = this.front;
    let fast = this.front;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.value);
  }

  contains(val) {
    let frontHolder = this.front;
    let rearHolder = this.rear;
    let left = 0;
    let right = this.size - 1;
    let found = false;

    while (!found && left < right) {
      if (frontHolder.value === val || rearHolder.value === val) {
        found = true;
      }
      left++;
      right--;
      frontHolder = frontHolder.next;
      rearHolder = rearHolder.prev;
    }
    return found;
  }
}

let list = new LinkedList();
list.insertFront(10);
list.insertFront(20);
list.insertFront(30);
list.insertFront(40);
list.insertFront(70);
list.insert(50, 3);
list.insert(60, 2);
// list.deleteFront();
// list.delete(3);
list.print();
console.log("------");
list.printMiddle();
