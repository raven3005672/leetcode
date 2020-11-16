/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let stash = people.sort((a,b) => {
    const diff = a[0] - b[0];
    if (diff !== 0) {
      return diff;
    } else {
      return b[1] - a[1];
    }
  });
  // 这里感觉是链表会更方便操作
  let result = [];
  while (stash.length) {
    const temp = stash.pop();
    result.splice(temp[1], 0, temp);
  }
  return result;
};

/**
 * 思路：排序+后置插入
 * 按身高从小到大排列，相同身高的按照前置人数从大到小排列
 * 弹出站，按照每个人的前置人数插入到新队列位置里。
 * 时间复杂度：O(n^2)，空间复杂度：O(logn)
 */