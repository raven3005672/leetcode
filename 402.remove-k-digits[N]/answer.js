/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }

  for (; k > 0; --k) {
    stk.pop();
  }

  let ans = "";
  let isLeadingZero = true;
  for (const digit of stk) {
    if (isLeadingZero && digit === '0') {
      continue;
    }
    isLeadingZero = false;
    ans += digit;
  }
  return ans === "" ? "0" : ans;
};

/**
 * 思路：贪心+单调栈
 * 对于两个相同长度的数字序列，最左边不同的数字决定了这两个数字的大小，例如，对于 A = 1axxx，B = 1bxxx，如果 a > b 则 A > B。
 * 基于此，我们可以知道，若要使得剩下的数字最小，需要保证靠前的数字尽可能小。
 * 让我们从一个简单的例子开始。
 * 给定一个数字序列，例如 425，如果要求我们只删除一个数字，那么从左到右，我们有 4、2 和 5 三个选择。
 * 我们将每一个数字和它的左邻居进行比较。从 2 开始，2 小于它的左邻居 4。
 * 假设我们保留数字 4，那么所有可能的组合都是以数字 4（即 42，45）开头的。
 * 相反，如果移掉 4，留下 2，我们得到的是以 2 开头的组合（即 25），这明显小于任何留下数字 4 的组合。
 * 因此我们应该移掉数字 4。如果不移掉数字 4，则之后无论移掉什么数字，都不会得到最小数。
 * 
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */
