class HashTable {
  constructor(size) {
    this.size = size;
    this.value = {};
  }

  calculateHash(value) {
    var sum = 0;

    for (var i = 0; i < value.size; i++) {
      var charCode = value.charCodeAt(i);
      sum += charCode;
    }

    return sum % this.size;
  }

  add(key, value) {
    var hash = this.calculateHash(key);

    if (this.values[hash] === undefined) {
      this.values[hash] = value;
    } else {
      var iters = 0;
      while (this.values[hash] !== undefined && iters <= this.size) {
        hash += 1;
        hash = hash % this.size;
        iters += 1;
      }
      if (iters > this.size) {
        throw "IndexOutOfRange";
      } else {
        this.values[hash] = value;
      }
    }
  }
  getItem(key) {
    var hash = this.calculateHash(key);
    return this.values[hash];
  }
}
