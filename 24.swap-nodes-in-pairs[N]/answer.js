/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

/*
 * 思路：递归
 * 两个一组翻转，并连接每个子翻转结构，不足两个的直接返回
 */
