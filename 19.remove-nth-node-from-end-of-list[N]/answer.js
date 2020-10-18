/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || !head.next) return null;
  let fast = head, slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) {
    return head.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

/*
 * 思路：快慢指针
 * 快指针比慢指针快n，快指针到终点的时候删除慢指针
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */