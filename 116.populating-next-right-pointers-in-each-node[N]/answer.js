/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

};

/*
 * 思路1：层次遍历
 * 时间复杂度O(N)，空间复杂度O(N)
 * 同一层的节点加入队列，遍历这一层的所有节点，向右链接
 */

var connect = function (root) {
  const Q = [root];
  while (Q.length > 0) {
    const size = Q.length;
    for (let i = 0; i < size; i++) {
      const node = Q.shift();
      if (i < size - 1) {
        node.next = Q[0];
      }
      if (node.left) {
        Q.push(node.left);
      }
      if (node.right) {
        Q.push(node.right);
      }
    }
  }
  return root;
}

/*
 * 思路2：利用next和树结构的关联关系
 * 时间复杂度O(N)，空间复杂度O(1)
 *    root1 -next-> root2
 * l1 -next-> r1 -next-> l2 -next-> r2
 */

var connect = function (root) {
  if (root === null) {
    return root;
  }
  let leftmost = root;
  while (leftmost.left !== null) {
    // 遍历这一层节点组织成的链表，为下一层的节点更新 next 指针
    let head = leftmost;
    while (head !== null) {
      // CONNECTION 1
      head.left.next = head.right;
      // CONNECTION 2
      if (head.next != null) {
        head.right.next = head.next.left;
      }
      // 指针向后移动
      head = head.next;
    }
    // 去下一层的最左的节点
    leftmost = leftmost.left;
  }
  return root;
}