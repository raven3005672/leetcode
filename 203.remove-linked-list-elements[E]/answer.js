/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null) {
    if (temp.next.val == val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return dummyHead.next;
};
