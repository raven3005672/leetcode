/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const allNumbers = Array.from(
    new Set([...nums, ...nums.map(x => 2 * x)]
      .sort((x, y) => x - y))
  );
  // 利用哈希表进行优化
  const values = new Map();
  let idx = 0;
  allNumbers.forEach(x => values.set(x, ++idx));

  let ret = 0;
  const bit = new BIT(values.size);
  for (let i = 0; i < nums.length; i++) {
    let left = values.get(nums[i] * 2), right = values.size;
    ret += bit.query(right) - bit.query(left);
    bit.update(values.get(nums[i]), 1);
  }
  return ret;
};

let BIT = class {
  constructor(n) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }

  lowbit(x) {
    return x & (-x);
  }

  update(x, d) {
    while (x <= this.n) {
      this.tree[x] += d;
      x += this.lowbit(x);
    }
  }

  query(x) {
    let ans = 0;
    while (x > 0) {
      ans += this.tree[x];
      x -= this.lowbit(x);
    }
    return ans;
  }
}

/**
 * 思路：树状数组
 * 树状数组支持的基本查询为求出 [1,val] 之间的整数数量。
 * 因此，对于 nums[i] 而言，我们首先查询 [1,2⋅nums[i]] 的数量，再求出 [1,maxValue] 的数量（其中 maxValue 为数组中最大元素的二倍）。
 * 二者相减，就能够得到以 i 为右端点的翻转对数量。
 * 由于数组中整数的范围可能很大，故在使用树状数组解法之前，需要利用哈希表将所有可能出现的整数，映射到连续的整数区间内。
 * 时间复杂度：O(NlogN)，空间复杂度：O(N)
 */