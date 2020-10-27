/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  
};

/*
 * 思路：递归
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */

var preorderTraversal = function (root) {
  let result = [];
  preOrder(root);
  return result;
};

var preOrder = function (root) {
  if (root != null) {
    result.push(root.val);
    if (root.left != null) {
      preOrder(root.left);
    }
    if (root.right != null) {
      preOrder(root.right);
    }
  }
}

/*
 * 思路：迭代
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */

var preorderTraversal = function(root) {
  let res = [];
  if (root == null) {
    return res;
  }
  let stack = [];
  let node = root;
  while(stack.length || node != null) {
    while (node != null) {
      res.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node .right;
  }
  return res;
}

/*
 * 思路：Morris遍历
 * 在线性时间内，只占用常数空间来实现前序遍历。
 * Morris遍历的核心思想是利用树的大量空闲指针，实现空间开销的极限缩减。其前序遍历规则如下：
 * 1.新建临时节点，令该节点为root。
 * 2.如果当前节点的左子节点为空，将当前节点加入答案，并遍历当前节点的右子节点。
 * 3.如果当前节点的左子节点不为空，在当前节点的左子树中找到当前节点在中序遍历下的前驱节点。
 *   3-1.如果前驱节点的右子节点为空，将前驱节点的右子节点设置为当前节点。然后将当前节点加入答案，并将当前节点更新为当前节点的左子节点。
 *   3-2.如果前驱节点的右子节点为当前节点，将它的右子节点重新设置为空。当前街店更新为当前节点的右子节点。
 * 4.重复步骤2和步骤3，直到遍历结束
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */

// public static void preOrderMorris(TreeNode head) {
// 	if (head == null) {
// 		return;
// 	}
// 	TreeNode cur1 = head;
// 	TreeNode cur2 = null;
// 	while (cur1 != null) {
// 		cur2 = cur1.left;
// 		if (cur2 != null) {
// 			while (cur2.right != null && cur2.right != cur1) {
// 				cur2 = cur2.right;
// 			}
// 			if (cur2.right == null) {
// 				cur2.right = cur1;
// 				System.out.print(cur1.value + " ");
// 				cur1 = cur1.left;
// 				continue;
// 			} else {
// 				cur2.right = null;
// 			}
// 		} else {
// 			System.out.print(cur1.value + " ");
// 		}
// 		cur1 = cur1.right;
// 	}
// }
