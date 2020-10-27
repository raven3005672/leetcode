/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(A, target) {

};

/*
 * 思路：三指针
 * 先对数组进行排序，遍历数组下标，对于每个i，设T = target - A[i]作为剩余要凑成的目标数。接着用双指针来完成A[j] + A[k] == T的子任务。
 * 考虑到有些元素是重复的，需要小心处理边界条件。只要A[j] + A[k] == T，就要算上这一堆j，k组合。
 * 在特殊情况下，如果A[j] == A[k]，我们有C(M/2) = M*(M-1)/2对可能的组合。
 * 时间复杂度：O(n^2)，空间复杂度：O(1)
 */

var threeSumMulti = function(A, target) {
  let MOD = Math.pow(10, 9) + 7;
  let ans = 0;
  A.sort();
  for (let i = 0; i < A.length; i++) {
    let T = target - A[i];
    let j = i + 1, k = A.length - 1;
    while (j < k) {
      if (A[j] + A[k] < T) {
        j++;
      } else if (A[j] + A[k] > T) {
        k--;
      } else if (A[j] != A[k]) {
        let left = 1, right = 1;
        while (j + 1 < k && A[j] == A[j + 1]) {
          left++;
          j++;
        }
        while (k - 1 > j && A[k] == A[k - 1]) {
          right++;
          k--;
        }
        ans += left * right;
        ans %= MOD;
        j++;
        k--;
      } else {
        ans += (k - j + 1) * (k - j) / 2;
        ans %= MOD;
        break;
      }
    }
  }
  return ans;
};

/*
 * 思路：数学法
 * count[x]为数组A中x出现的次数。分类讨论
 * 1. x,y,z各不相同，组合数: count[x] * count[y] * count[z]
 * 2. x == y != z，组合数: C(count[x]/2) * count[z]
 * 3. x != y == z，组合数: count[x] * C(count[y]/2)
 * 4. x == y == z，组合数: C(count[x]/3)
 * C(n/k) = n!/((n-k)!*k!)
 * 时间复杂度：O(N + W^2)，空间复杂度：O(W)，W为A中最大的数
 */

var threeSumMulti = function (A, target) {
  let MOD = Math.pow(10, 9) + 7;
  let count = Array.from({length: 101}, () => 0);
  for (let x of A) {
    count[x]++;
  }
  let ans = 0;
  // x != y != z
  for (let x = 0; x <= 100; x++) {
    for (let y = x + 1; y <= 100; y++) {
      let z = target - x - y;
      if (y < z && z <= 100) {
        ans += count[x] * count[y] * count[z];
        ans %= MOD;
      }
    }
  }
  // x == y != z
  for (let x = 0; x <= 100; x++) {
    let z = target - 2 * x;
    if (x < z && z <= 100) {
      ans += count[x] * (count[x] - 1) / 2 * count[z];
      ans %= MOD;
    }
  }
  // x != y == z
  for (let x = 0; x <= 100; x++) {
    if (target % 2 == x % 2) {
      let y = (target - x) / 2;
      if (x < y && y <= 100) {
        ans += count[x] * count[y] * (count[y] - 1) / 2;
        ans %= MOD;
      }
    }
  }
  // x == y == z
  if (target % 3 == 0) {
    let x = target / 3;
    if (0 <= x && x <= 100) {
      ans += count[x] * (count[x] - 1) * (count[x] - 2) / 6;
      ans %= MOD;
    }
  }
  return ans;
}

/*
 * 思路：变种的三数之和
 * keys为数组A中所有元素只出现一次的有序数组。接着用三数之和的方法来处理keys。
 * 时间复杂度：O(N^2)，空间复杂度：O(N)
 */

var threeSumMulti = function(A, target) {
  let MOD = Math.pow(10, 9) + 7;
  let count = Array.from({length: 101}, () => 0);
  let uniq = 0;
  for (let x of A) {
    count[x]++;
    if (count[x] == 1) {
      uniq++;
    }
  }
  let keys = Array.from({length: uniq});
  let t = 0;
  for (let i = 0; i <= 100; i++) {
    if (count[i] > 0) {
      keys[t++] = i;
    }
  }
  let ans = 0;
  for (let i = 0; i < keys.length; i++) {
    let x = keys[i];
    let T = target - x;
    let j = i, k = keys.length - 1;
    while (j <= k) {
      let y = keys[j], z = keys[k];
      if (y + z < T) {
        j++;
      } else if (y + z > T) {
        k--;
      } else {
        if (i < j && j < k) {
          ans += count[x] * count[y] * count[z]
        } else if (i == j && j < k) {
          ans += count[x] * (count[x] - 1) / 2 * count[z];
        } else if (i < j ** j == k) {
          ans += count[x] * count[y] * (count[y] - 1) / 2;
        } else {
          ans += count[x] * (count[x] - 1) * (count[x] - 2) / 6;
        }
        ans %= MOD;
        j++;
        k--;
      }
    }
  }
  return ans;
};

