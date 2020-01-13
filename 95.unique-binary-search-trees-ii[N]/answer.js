/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
};

// 递归
var generateTrees = function(n) {
    let ans = [];
    if (n == 0) return [];
    return getAns(1, n);
}
function getAns(start, end) {
    let ans = [];
    // 此时没有数字，将null加入结果中
    if (start > end) {
        ans.push(null);
        return ans;
    }
    // 只有一个数字，当前数字作为一个树加入结果中
    if (start == end) {
        let tree = new TreeNode(start);
        ans.push(tree);
        return ans;
    }
    // 尝试每个数字作为跟节点
    for (let i = start; i <= end; i++) {
        // 得到所有可能的左子树
        let leftTrees = getAns(start, i - 1);
        // 得到偶有可能的右子树
        let rightTrees = getAns(i + 1, end);
        // 左右子树两两组合
        for (leftTree of leftTrees) {
            for (rightTree of rightTrees) {
                let root = new TreeNode(i);
                root.left = leftTree;
                root.right = rightTree;
                ans.push(root);
            }
        }
    }
    return ans;
}

// 动态规划
// 求出长度为1的所有可能，长度为2的所有可能，直到n。
// 实现树的复制并且加上偏差
function clone(n, offset) {
    if (n == null) return null;
    let node = new TreeNode(n.val + offset);
    node.left = clone(n.left, offset);
    node.right = clone(n.right, offset);
    return node;    
}
// 求长度为len的所有情况，我们只需要求出一个代表[1...len]的所有情况，其他的话加上一个偏差，加上当前根节点即可

function generateTrees(n) {
    let dp = [];
    dp[0] = [];
    if (n == 0) return dp[0];
    dp[0].push(null);
    // 长度为1到n
    for (let len = 1; len <= n; len++) {
        dp[len] = [];
        // 将不同的数字作为根节点，只需要考虑到len
        for (let root = 1; root <= len; root++) {
            let left = root - 1;    // 左子树的长度
            let right = len - root; // 右子树的长度
            for (leftTree of dp[left]) {
                for (rightTree of dp[right]) {
                    let treeRoot = new TreeNode(root);
                    treeRoot.left = leftTree;
                    // 克隆右子树并且加上偏差
                    treeRoot.right = clone(rightTree, root);
                    dp[len].push(treeRoot);
                }
            }
        }
    }
    return dp[n];
}

// 动态规划2
// 每次新增加的数字大于之前的所有数字，所以新增加的数字出现的位置只能是根节点或者根节点的右孩子，总之一定是右边。
// 新数字所在位置原来的子树，改为当前插入数字的做孩子即可，因为插入数字是最大的。
  2
1
// 把3放到根节点
    3
  2
1
// 把3放到根节点的右孩子
  2
1   3

1
  2
// 把3放到根节点
  3
1
  2
// 把3放到根节点的右孩子，原来的子树作为3的左孩子
1
  3
2
// 把3放到根节点右孩子的右孩子
1
  2
    3
// 求当前的所有借只需要上一次的解，所以我们只需要两个list，pre保存上一次的所有解，cur计算当前的所有解。
function generateTrees(n) {
    let pre = [];
    if (n == 0) return pre;
    pre.push(null);
    // 每次增加一个数字
    for (let i = 1; i <= n; i++) {
        let cur = [];
        // 遍历之前的所有解
        for (root of pre) {
            // 插入到根节点
            let insert = new TreeNode(i);
            insert.left = root;
            cur.push(insert);
            for (let j = 0; j <= n; j++) {
                let root_copy = treeCopy(root);     // 复制当前的树
                let right = root_copy;              // 找到要插入右孩子的位置
                let k = 0;
                // 遍历j次找右孩子
                for (; k < j; k++) {
                    if (right == null) {
                        break;
                    }
                    right = right.right;
                }
                // 到达null提前结束
                if (right == null) {
                    break;
                }
                // 保存当前右孩子的位置的子树作为插入节点的左孩子
                let rightTree = right.right;
                insert = new TreeNode(i);
                right.right = insert;           // 右孩子是插入的节点
                insert.left = rightTree;        // 插入节点的左孩子更新为插入位置之前的子树
                // 加入结果中
                cur.push(root_copy);
            }
        }
        pre = cur;
    }
    return pre;
}
function treeCopy(root) {
    if (root == null) {
        return root;
    }
    let newRoot = new TreeNode(root.val);
    newRoot.left = treeCopy(root.left);
    newRoot.right = treeCopy(root.right);
    return newRoot;
}