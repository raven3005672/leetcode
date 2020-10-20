/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  let order = true;
  let current = stack.shift();
  while (stack.length) {
    if (order) {
      current.next = stack.pop();
      current = current.next;
      current.next = null;
      order = !order;
    } else {
      current.next = stack.shift();
      current = current.next;
      current.next = null;
      order = !order;
    }
  }
  return head;
};

/*
 * 思路：队列 + 栈，本质等同于思路1
 */

/*
 * 思路1：线性表
 * 因为链表不支持下标访问，所以我们无法随机访问链表中任意位置的元素。
 * 因此比较容易想到的一个方法是，我们利用线性表存储该链表，然后利用线性表可以下标访问的特点，直接按顺序访问指定元素，重建该链表即可。
 * 时间复杂度：O(N)，空间复杂度：O(N)
 */

/*
 * 思路2：寻找链表中点 + 链表逆序 + 合并链表
 * 注意到目标链表即为将原链表的左半端和反转后的右半端合并后的结果。
 * 这样我们的任务即可划分为三步：
 * 1.找到原链表的中点（参考「876. 链表的中间结点」）。
 * 我们可以使用快慢指针来 O(N) 地找到链表的中间节点。
 * 2.将原链表的右半端反转（参考「206. 反转链表」）。
 * 我们可以使用迭代法实现链表的反转。
 * 3.将原链表的两端合并。
 * 因为两链表长度相差不超过 1，因此直接合并即可。
 * 时间复杂度：O(N)，空间复杂度：O(1)
 */

var reorderList = function(head) {
  if (!head) {
    return null;
  }
  let mid = middleNode(head);
  let l1 = head;
  let l2 = mid.next;
  mid.next = null;
  l2 = reverseList(l2);
  mergeList(l1, l2);
};

function middleNode(head) {
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseList(head) {
  let prev = null, cur = head;
  while (cur) {
    let nextTmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTmp;
  }
  return prev;
}

function mergeList(l1, l2) {
  let l1Tmp, l2Tmp;
  while (l1 && l2) {
    l1Tmp = l1.next;
    l2Tmp = l2.next;
    l1.next = l2;
    l1 = l1Tmp;
    l2.next = l1;
    l2 = l2Tmp;
  }
}
