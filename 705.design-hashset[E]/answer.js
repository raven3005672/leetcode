/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.arr.includes(key)) {
    this.arr.push(key);
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  var idx = this.arr.indexOf(key);
  if (idx > -1) {
    this.arr.splice(idx, 1);
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  var idx = this.arr.indexOf(key);
  return idx > -1 ? true : false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */



var MyHashSet = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashSet.prototype.add = function (key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
    if (element === key) {
      return;
    }
  }
  this.data[h].push(key);
};

MyHashSet.prototype.remove = function (key) {
  const h = this.hash(key);
  const it = this.data[h];
  for (let i = 0; i < it.length; ++i) {
    if (it[i] === key) {
      it.splice(i, 1);
      return;
    }
  }
};

MyHashSet.prototype.contains = function (key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
    if (element === key) {
      return true;
    }
  }
  return false;
};

MyHashSet.prototype.hash = function (key) {
  return key % this.BASE;
}
