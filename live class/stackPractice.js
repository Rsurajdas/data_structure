class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push = (el) => {
    this.top++;
    this.data[this.top] = el;
    console.log(`${el} Element added in ${this.top}`);
  };

  peek = () => {
    if (this.top > -1) {
      console.log(`Top Value ${this.data[this.top]}`);
    }
  };

  printStack = () => {
    let i = this.top;
    while (i > -1) {
      console.log(`Element at ${i} is ${this.data[i]}`);
      i--;
    }
  };

  pop = () => {
    if (this.top === -1) {
      return;
    }
    console.log(`Element removed from ${this.top}`);
    let el = this.data[this.top];
    this.data.splice(this.top, 1);
    this.top--;
    return el;
  };
}
let stack = new Stack();
const isValidString = (str) => {
  let strArr = str.split("");
  let isValid = true;
  for (let i = 0; i < strArr.length; i++) {
    let currentEl = strArr[i];
    if (currentEl === "[" || currentEl === "{" || currentEl === "(") {
      stack.push(currentEl);
    } else {
      let topFromStack = stack.pop();
      if (
        (topFromStack === "[" && currentEl !== "]") ||
        (topFromStack === "{" && currentEl !== "}") ||
        (topFromStack === "(" && currentEl !== ")")
      ) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
};

console.log(isValidString("[{}]"));
