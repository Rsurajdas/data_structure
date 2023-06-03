class Hashmap {
  constructor() {
    this.buckets = [];
  }

  //   hash(key) {
  //     return key.length;
  //   }

  hash(key) {
    return key.toLowerCase().charCodeAt(0) - 97;
  }

  getIndex(key) {
    let hashValue = this.hash(key);
    let idx = hashValue;
    return idx;
  }

  setBucket(key, value) {
    let idx = this.getIndex(key);
    let obj = {};
    obj[key] = value;
    if (this.buckets[idx]) {
      this.buckets[idx] = { ...this.buckets[idx], ...obj };
    } else {
      this.buckets[idx] = obj;
    }
  }

  getBucket(key) {
    let idx = this.getIndex(key);
    return this.buckets[idx][key];
  }

  printBuckets() {
    for (let bucket of this.buckets) {
      if (bucket) {
        console.log(bucket);
      }
    }
  }
}

let h1 = new Hashmap();
h1.setBucket("Ballon", 80);
h1.setBucket("Photo", 95);
h1.setBucket("Bag", 20);
h1.setBucket("Cap", 45);
h1.setBucket("Air Bag", 45);
console.log(h1.printBuckets());
console.log("b".charCodeAt() - 97);
