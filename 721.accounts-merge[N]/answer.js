/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {

}

/* 思路：
 * 如果两个电子邮件出现在同一个账户中，则在它们之间划一条边。那么问题归结于找到这个图的连接组件。
 * 对于每个账户，从第一个电子邮件到所有其他电子邮件画一条边。
 * 另外，我们会记录一张从电子邮件到名字的哈希表。然后使用深度优先搜索合并相同的账户。
 */
class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  // 查找元素所在集合
  find(x) {
    while (this.parent.has(x)) {
      x = this.parent.get(x);
    }
    return x;
  }

  // 合并两个集合
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP !== rootQ) {
      this.parent.set(this.find(p), this.find(q));
    }
  }
}

const cmp = (x, y) => {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
};

/**
* @param {string[][]} accounts
* @return {string[][]}
*/
var accountsMerge = function (accounts) {
  const uf = new UnionFind();
  const map = {}; // email => name

  // 步骤1:将属于同一集合的email进行“连线”
  for (const account of accounts) {
    for (let i = 1; i < account.length; ++i) {
      map[account[i]] = account[0];
      if (i < account.length - 1) {
        uf.union(account[i], account[i + 1]);
      }
    }
  }
  // 步骤2: 将属于同一连通分量（同一用户）的所有邮箱放入对应的列表中
  const sets = {}; // key: string; value: string[]
  for (const email in map) {
    const root = uf.find(email);
    if (!sets[root]) {
      sets[root] = [];
    }
    sets[root].push(email);
  }

  const res = [];
  for (const root in sets) {
    sets[root].sort(cmp);
    res.push([map[root], ...sets[root]]);
  }
  return res;
};