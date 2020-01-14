/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head == null) {
        return null
    } else if (head.next == null) {
        return new TreeNode(head.val);
    }
    let pre = head;
    let p = pre.next;
    let q = p.next;
    // 找链表中点p
    while (q != null && q.next != null) {
        pre = pre.next;
        p = pre.next;
        q = q.next.next;
    }
    // 将中点左边的链表分开
    pre.next = null;
    let root = new TreeNode(p.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(p.next);
    return root;
};