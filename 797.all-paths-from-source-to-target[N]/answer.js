/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let result = [];
  // 深度优先加回溯
  function dfs(start, res, target) {
    res.push(start);
    if (start == target) {
      result.push(res.map(val => val));
    } else {
      graph[start].forEach(next => {
        dfs(next, res, target);
      });
    }
    res.pop();
  }
  dfs(0, [], graph.length - 1);
  return result;
};

/**
 * 思路：递归 + DFS
 * 题目中给出的图是有向无环的，那么我们可以通过深度优先搜索的方法，递归求解出所有的路径。
 * 设图中有N个节点，在搜索时，如果我们到达了节点N-1，那么此时的路径就为{N-1}；
 * 否则如果我们到达了其他的节点node，那么路径就为{node}加上{所有从nei到N-1}的路径集合，其中nei是node直接相邻的节点。
 */
