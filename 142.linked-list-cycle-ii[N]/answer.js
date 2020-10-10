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
var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let p1 = head, p2 = head;
    let hasCycle = false;
    while (p2.next != null && p2.next.next != null) {
        p1 = p1.next;
        p2 = p2.next.next;
        if (p1 == p2) {
            hasCycle = true;
            break;
        }
    }
    if (hasCycle) {
        let q = head;
        while (p1 != q) {
            p1 = p1.next;
            q = q.next;
        }
        return q;
    } else {
        return null;
    }
};

/*
 * 算法解析
 * 0 - 1 - 2 - 3 - 4
 *         |       |
 *         7 - 6 - 5
 * 我们设置快慢两个指针，fast, slow fast一次前进两步，slow一次前进一步
 * 设a为第一个节点到入环节点的距离。 a=[0->2]
 * 设b为入环口到相遇点的距离。b=[2->6]
 * 设c为相遇点到入环口的距离。c=[6->2]
 * 当fast，和slow相遇的时候，fast经过的节点是slow的两倍，设slow经过的节点数为S
 * 根据上面的设置 可知 S=a+b, 2S=a+2b+c，可知 a=c
 * 此时让slow回到第一个节点，fast处于第一次相遇的节点，
 * 此时slow从第一个节点出发，因为a=c，所以fast，和slow会在入环口第二次相遇，得到要求的节点。
 */

// 暴力：仅作为可解的方法
// var detectCycle = function (head) {
//   let current = head;
//   let nList = [];
//   while (current && current.next) {
//     if (nList.includes(current.next)) {
//       return current.next;
//     } else {
//       nList.push(current);
//       nList.push(current.next);
//       current = current.next;
//     }
//   }
//   return null;
// };
