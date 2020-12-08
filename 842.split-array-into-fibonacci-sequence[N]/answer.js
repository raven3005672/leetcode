/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  const list = new Array().fill(0);
  backtrack(list, S, S.length, 0, 0, 0);
  return list;
};

function backtrack(list, S, length, index, sum, prev) {
  if (index === length) {
    return list.length >= 3;
  }
  let currLong = 0;
  for (let i = index; i < length; i++) {
    if (i > index && S[index] === '0') {
      break;
    }
    currLong = currLong * 10 + S[i].charCodeAt() - '0'.charCodeAt();
    if (currLong > Math.pow(2, 31) - 1) {
      break;
    }
    let curr = currLong;
    if (list.length >= 2) {
      if (curr < sum) {
        continue;
      } else if (curr > sum) {
        break;
      }
    }
    list.push(curr);
    if (backtrack(list, S, length, i + 1, prev + curr, curr)) {
      return true;
    } else {
      list.splice(list.length - 1, 1);
    }
  }
  return false;
}

/**
 * 思路：回溯
 * 将给定的字符串拆分成斐波那契式序列，可以通过回溯的方法实现。
 * 使用列表存储拆分出的数，回溯过程中维护该列表的元素，列表初始为空。遍历字符串的所有可能的前缀，作为当前被拆分出的数，然后对剩余部分继续拆分，直到整个字符串拆分完毕。
 * 根据斐波那契式序列的要求，从第 3 个数开始，每个数都等于前 2 个数的和，因此从第 3 个数开始，需要判断拆分出的数是否等于前 2 个数的和，只有满足要求时才进行拆分，否则不进行拆分。
 * 回溯过程中，还有三处可以进行剪枝操作。
 * 拆分出的数如果不是 0，则不能以 0 开头，因此如果字符串剩下的部分以 0 开头，就不需要考虑拆分出长度大于 1 的数，因为长度大于 1 的数以 0 开头是不符合要求的，不可能继续拆分得到斐波那契式序列；
 * 拆分出的数必须符合 32 位有符号整数类型，即每个数必须在 [0,2^31-1] 的范围内，如果拆分出的数大于 2^31-1，则不符合要求，长度更大的数的数值也一定更大，一定也大于 2^31-1，因此不可能继续拆分得到斐波那契式序列；
 * 如果列表中至少有 2 个数，并且拆分出的数已经大于最后 2 个数的和，就不需要继续尝试拆分了。
 * 当整个字符串拆分完毕时，如果列表中至少有 3 个数，则得到一个符合要求的斐波那契式序列，返回列表。如果没有找到符合要求的斐波那契式序列，则返回空列表。
 * 实现方面，回溯需要带返回值，表示是否存在符合要求的斐波那契式序列。
 * 时间复杂度：O(n(logC)^2)，空间复杂度：O(n)
 */
