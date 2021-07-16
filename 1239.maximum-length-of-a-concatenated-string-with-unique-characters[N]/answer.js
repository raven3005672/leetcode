/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let ans = 0;
  const masks = [0];
  for (const s of arr) {
    let mask = 0;
    for (let i = 0; i < s.length; ++i) {
      const ch = s[i].charCodeAt() - 'a'.charCodeAt();
      if (((mask >> ch) & 1) !== 0) { // 若 mask 已有 ch，则说明 s 含有重复字母，无法构成可行解
        mask = 0;
        break;
      }
      mask |= 1 << ch; // 将 ch 加入 mask 中
    }
    if (mask === 0) {
      continue;
    }
    const n = masks.length;
    for (let i = 0; i < n; ++i) {
      const m = masks[i];
      if ((m & mask) === 0) { // m 和 mask 无公共元素
        masks.push(m | mask);
        ans = Math.max(ans, (m | mask).toString(2).split('0').join('').length);
      }
    }
  }
  return ans;
};
