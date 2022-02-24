class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  set(key, value) {
    //O(1)
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    // O(1)
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

function sameNum() {
  let arr = [9, 6, 11, 5];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }

  // console.log(obj.arr[0]);
  console.log(obj[5]);
  console.log(obj[9]);
  console.log(obj);
}
// sameNum();

let myHashTable = new HashTable();
myHashTable.set("nails", 900);
myHashTable.set("screws", 400);
myHashTable.set("bolts", 350);
// myHashTable.set("washers", 550);
// myHashTable.set("cords", 25);
// myHashTable.set("nailgun", 11);
console.log(myHashTable);
console.log(myHashTable.get("washers"));
