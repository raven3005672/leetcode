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
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let first = new ListNode(null);
    let head1 = l1, head2 = l2, head = first;
    let arr1 = [], arr2 = [], result = [];
    let flag = false;
    while (head1) {
        arr1.push(head1.val);
        head1 = head1.next;
    }
    while (head2) {
        arr2.push(head2.val);
        head2 = head2.next;
    }
    while (arr1.length || arr2.length || flag) {
        let t = 0;
        if (arr1.length === 0 && arr2.length === 0) {
            t = 0;
        } else if (arr1.length === 0) {
            t = arr2.pop();
        } else if (arr2.length === 0) {
            t = arr1.pop();
        } else {
            t = arr1.pop() + arr2.pop();
        }
        if (flag) {
            t += 1;
        }
        if (t > 9) {
            flag = true;
        } else {
            flag = false;
        }
        let node = new ListNode(t % 10);
        result.unshift(node);
    }
    for (let i = 0; i < result.length; i++) {
        head.next = result[i];
        head = head.next;
    }
    return first.next;
};