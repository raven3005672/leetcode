/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let lib = {};
  for (let x of arr) {
    if (lib[x]) {
      lib[x]++;
    } else {
      lib[x] = 1;
    }
  }
  let array = [];
  for (let y in lib) {
    if (array.find(item => item == lib[y])) {
      return false;
    } else {
      array.push(lib[y]);
    }
  }
  return true;
};

/*
 * 思路：哈希表
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */

var uniqueOccurrences = function (arr) {
  const occur = new Map();
  for (const x of arr) {
    if (occur.has(x)) {
      occur.set(x, occur.get(x) + 1);
    } else {
      occur.set(x, 1);
    }
  }
  const times = new Set();
  for (const [key, value] of occur) {
    times.add(value);
  }
  return times.size === occur.size;
};