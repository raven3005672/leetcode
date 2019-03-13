/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 测试用例
var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0),
        temp = result;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                temp.next = new ListNode(l1.val);
                l1 = l1.next;
                temp = temp.next;
            } else {
                temp.next = new ListNode(l2.val);
                l2 = l2.next;
                temp = temp.next;
            }
        } else if (l1) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }

    return result.next;
};

console.log(mergeTwoLists(l1, l2))