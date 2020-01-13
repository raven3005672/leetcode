/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let big = new ListNode(0);
    let small = new ListNode(0);
    let bigHead = big;
    let smallHead = small;
    while (head != null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            big.next = head;
            big = big.next;
        }
        head = head.next;
    }
    small.next = bigHead.next;
    big.next = null;
    return smallHead.next;
};