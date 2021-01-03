/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const rowlen = mat.length; // 多少行
  const colLen = mat[0].length; // 一行多少个
  let result = [];
  // 纵向扫描，每当获取到第一个0，则直接放进result结果集
  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowlen; j++) {
      // 如果已经够了需要的k个数，则直接返回
      if (result.length === k) return result;
      // 如果这行已经进入了result，则直接跳过
      if (result.includes(j)) continue;
      if (mat[j][i] === 0) {
        result.push(j);
      }
    }
  }

  // 如果已经遍历完了，但是k不满
  let index = 0;
  while (result.length < k) {
    // 按顺序放入index即可
    if (!result.includes(index)) result.push(index)
    index++
  }
  return result;
};
