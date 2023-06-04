class HashTable {
  constructor(size) {
    this.size = size;
    this.values = {};
  }

  calculateHash(value) {
    return value % this.size;
  }

  add(value) {
    let hash = this.calculateHash(value);
    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      let i = 0;
      while (this.values[hash] !== undefined && i < this.size) {
        hash += 1;
        hash = hash % this.size;
        i += 1;
      }

      if (i > this.size) {
        console.log("Hash Table is Full");
      } else {
        this.values[hash] = value;
      }
    }
  }

  contains(value) {
    let hash = this.calculateHash(value);
    if (this.values[hash] === value) {
      return true;
    } else {
      let i = 0;
      while (this.values[hash] !== value && i < this.size) {
        hash += 1;
        hash = hash % this.size;
        i += 1;
      }

      if (this.values[hash] === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  print() {
    console.log(this.values);
  }
}

let hash = new HashTable(251);
let arr = [0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let val = arr[i];
  if (!hash.contains(val)) {
    hash.add(val);
    result.push(val);
  }
}

console.log(result);

let hash2 = new HashTable(251);
let arr1 = [1, 2, 4, 2, 5, 7, 9, 3, 18, 0, 19];
let arr2 = [3, 2, 5, 10, 1, 15, 1];

function intercept(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!hash2.contains(arr1[i])) {
      hash2.add(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hash2.contains(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}

console.log(intercept(arr1, arr2));
