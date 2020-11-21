/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
}

var sortList = function (head) {
  if (head === null) {
    return head;
  }
  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    node = node.next;
  }
  const dummyHead = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead, curr = dummyHead.next;
    while (curr !== null) {
      let head1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }
      let head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
        curr = curr.next;
      }
      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next !== null) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
};

/**
 * 思路：归并排序
 * 使用自底向上的方法实现归并排序，则可以达到 O(1) 的空间复杂度。
 * 首先求得链表的长度 length，然后将链表拆分成子链表进行合并。
 * 具体做法如下。
 * 1.用 subLength 表示每次需要排序的子链表的长度，初始时 subLength = 1。
 * 2.每次将链表拆分成若干个长度为 subLength 的子链表（最后一个子链表的长度可以小于 subLength），按照每两个子链表一组进行合并，合并后即可得到若干个长度为 subLength×2 的有序子链表（最后一个子链表的长度可以小于 subLength×2）。
 * 合并两个子链表仍然使用「21. 合并两个有序链表」的做法。
 * 3.将 subLength 的值加倍，重复第 2 步，对更长的有序子链表进行合并操作，直到有序子链表的长度大于或等于 length，整个链表排序完毕。
 * 如何保证每次合并之后得到的子链表都是有序的呢？可以通过数学归纳法证明。
 * 1.初始时 subLength=1，每个长度为 1 的子链表都是有序的。
 * 2.如果每个长度为 subLength 的子链表已经有序，合并两个长度为 subLength 的有序子链表，得到长度为 subLength×2 的子链表，一定也是有序的。
 * 3.当最后一个子链表的长度小于 subLength 时，该子链表也是有序的，合并两个有序子链表之后得到的子链表一定也是有序的。
 * 因此可以保证最后得到的链表是有序的。
 * 时间复杂度：O(nlogn)，空间复杂度：O(1)
 */