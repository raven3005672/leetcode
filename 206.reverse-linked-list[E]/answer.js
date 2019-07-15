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
var reverseList = function(head) {
    let result = null;
    while (head) {
        let temp = head.next;
        head.next = result;
        result = head;
        head = temp;
    }
    return result;
};

// 也可以做出入栈