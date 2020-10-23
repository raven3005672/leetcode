/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let temp = head, str = '', reverseStr = '';
  while (temp) {
    str = str + temp.val;
    reverseStr = temp.val + reverseStr;
    temp = temp.next
  }
  return str == reverseStr;
};

/*
 * 思路：链表转数组 + 双指针
 * 在起点放置一个指针，在结尾放置一个指针，每一次迭代判断两个指针指向的元素是否相同。
 * 相同则将两个指针向内移动，并继续判断，直到两个指针相遇。
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */

var isPalindrome = function (head) {
  const vals = [];
  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
};

/*
 * 思路：递归
 * 如果使用递归反向迭代节点，同时使用递归函数外的变量向前迭代，就可以判断链表是否为回文。
 * currentNode指针先到尾节点，由于递归的特性再从后往前进行比较。frontPointer是递归函数外的指针。
 * 若 currentNode.val != frontPointer.val 则返回 false。反之，frontPointer 向前移动并返回 true。
 * 算法的正确性在于递归处理节点的顺序是相反的（回顾上面打印的算法），而我们在函数外又记录了一个变量，因此从本质上，我们同时在正向和逆向迭代匹配。
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */

let frontPointer;
const recursivelyCheck = (currentNode) => {
  if (currentNode !== null) {
    if (!recursivelyCheck(currentNode.next)) {
      return false;
    }
    if (currentNode.val !== frontPointer.val) {
      return false;
    }
    frontPointer = frontPointer.next;
  }
  return true;
}
var isPalindrome = function (head) {
  frontPointer = head;
  return recursivelyCheck(head);
};
