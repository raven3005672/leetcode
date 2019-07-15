/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp = head,str = '', reverseStr = '';
    while(temp){
        str = str + temp.val;
        reverseStr = temp.val + reverseStr;
        temp = temp.next
    }
    return str == reverseStr 
};

// 其他思路：用栈解决