/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.map = {};
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return this.map[key] !== undefined ? this.map[key] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


var MyHashMap = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashMap.prototype.put = function (key, value) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      it[1] = value;
      return;
    }
  }
  this.data[h].push([key, value]);
};

MyHashMap.prototype.get = function (key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      return it[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  const h = this.hash(key);
  for (const it of this.data[h]) {
    if (it[0] === key) {
      const idx = this.data[h].indexOf(it);
      this.data[h].splice(idx, 1);
      return;
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.BASE;
}
