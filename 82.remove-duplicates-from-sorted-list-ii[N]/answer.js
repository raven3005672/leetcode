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
var deleteDuplicates = function (head) {
  let dummy = new ListNode(-1);
  let slow = dummy;
  let fast = head;
  dummy.next = head;
  while (fast != null && fast.next != null) {
    if (fast.val != fast.next.val) {
      if (slow.next == fast) {
        // 快指针先前没查找到相同数
        slow = fast;
      } else {
        // 先前查找到相同数，将出现相同数的前一个数链接到相同数后第一个不同数
        slow.next = fast.next;
      }
    }
    fast = fast.next;
  }
  // 针对类似[1,1]的情况
  if (slow.next != fast) {
    slow.next = fast.next;
  }
  return dummy.next;
};
