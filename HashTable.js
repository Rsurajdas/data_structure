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

let hash = new HashTable(20);
