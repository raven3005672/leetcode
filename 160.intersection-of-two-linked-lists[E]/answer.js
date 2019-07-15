/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    var a = headA, b = headB;
    //相交则返回当前节点，否则返回null
    //当a、b不相交，a为null，将headB赋值给a，此时b为b.next
    while(a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
};