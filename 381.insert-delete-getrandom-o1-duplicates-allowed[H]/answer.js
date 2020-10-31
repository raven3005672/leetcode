/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.idx = new Map();
  this.nums = [];
};

/**
* Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.insert = function(val) {
  this.nums.push(val);
  const set = this.idx.has(val) ? this.idx.get(val) : new Set();
  set.add(this.nums.length - 1);
  this.idx.set(val, set);
  return set.size === 1;
};

/**
* Removes a value from the collection. Returns true if the collection contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedCollection.prototype.remove = function(val) {
  if (!this.idx.has(val)) {
      return false;
  }
  let i = undefined;
  for (const it of this.idx.get(val)) {
      if (!i) {
          i = it;
          break;
      }
  }
  const lastNum = this.nums[this.nums.length - 1];
  this.nums[i] = lastNum;
  this.idx.get(val).delete(i);
  this.idx.get(lastNum).delete(this.nums.length - 1);
  if (i < this.nums.length - 1) {
      this.idx.get(lastNum).add(i);
  }
  if (this.idx.get(val).size === 0) {
      this.idx.delete(val);
  }
  this.nums.pop();
  return true;
};

/**
* Get a random element from the collection.
* @return {number}
*/
RandomizedCollection.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/*
 * 思路：哈希表
 * 为了使得O(1)时间内能够随机获取一个元素，我们将每个数值(可以重复)存储在一个列表nums中。
 * 这样，获取随机元素时，只需要随机生成一个列表中的索引，就能够的到一个随机元素。
 * 这样做的问题在于：列表中的随机删除并不是O(1)的。
 * 然而我们可以发现，列表中元素的顺序是无关紧要的，只要他们正确地存在于列表中即可。
 * 因此，在删除元素时，我们可以将被删的元素与列表中的最后一个元素交换位置，随后便可以在O(1)时间内，从列表中去除该元素。
 * 这需要我们额外维护数值在列表中每一次出现的下标集合。对于数值val而言，记其下标集合为S(idx)
 * 在删除时，我们找出val出现的其中一个下标i，并将nums[i]与nums[nums.length-1]交换。
 * 随后，将i从S(val)中去除，并将S(nums[nums.length-1])中原有的nums[nums.length-1]替换成i。
 * 由于集合的每个操作都是O(1)的，因此总的平均时间复杂度也是O(1)的。
 * 时间复杂度：O(1)，空间复杂度：O(n)
 */