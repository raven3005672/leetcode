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
var removeElements = function(head, val) {
    let prev = null;
    let cur = head;
    while(cur) {
        if (cur.val === val) {
            if (prev) {
                prev.next = cur.next;   // 修改当前地址上的数据
            } else {
                head = cur.next;
            }
        } else {
            prev = cur;                 // 将prev指向到cur对应的地址(向下移动)
        }
        cur = cur.next;                 // 将cur变量指向到它的next下一个地址上
    }
    return head;
};