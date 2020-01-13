/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k == 0) return head;
    if (!head.next) return head;
    let n = 1;
    let last = head;
    while(last.next) {
        n++;
        last = last.next;
    }
    // 这里得到len的长度，last是最后一位
    last.next = head;
    let result = null;
    k = k % n;
    while (k++ < n) {
        k === n && (result = head);
        head = head.next;
    }
    result.next = null;
    return head;
};