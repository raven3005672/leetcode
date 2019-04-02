/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return isSame(p, q);
}
function isSame(t1, t2){
    if(t1 == null && t2 == null) {
        return true;
    }
    if(t1 == null || t2 == null) {
        return false;
    }
    return (t1.val == t2.val) && isSame(t1.left,t2.left) && isSame(t1.right,t2.right);
}
// 自己写的，貌似执行速度更快。
// var isSameTree = function(p, q) {
//     let pQueue = [], qQueue = [];
//     pQueue.push(p);
//     qQueue.push(q);
//     while (pQueue.length == qQueue.length && pQueue.length !== 0) {
//         let currentP = pQueue.shift();
//         if (currentP) {
//             pQueue.push(currentP.left);
//             pQueue.push(currentP.right);
//         }
//         let currentQ = qQueue.shift();
//         if (currentQ) {
//             qQueue.push(currentQ.left);
//             qQueue.push(currentQ.right);
//         }
//         if (currentP && currentQ) {
//             if (currentP.val !== currentQ.val) {
//                 return false;
//             }
//         } else if (currentP || currentQ) {
//             return false;
//         }
//     }
//     return true;
// };