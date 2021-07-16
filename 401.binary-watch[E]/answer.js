/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const ans = [];
  for (let i = 0; i < 1024; ++i) {
    let h = i >> 6, m = i & 63; // 用位运算取出高 4 位和低 6 位
    if (h < 12 && m < 60 && i.toString(2).split('0').join('').length === turnedOn) {
      ans.push(h + ":" + (m < 10 ? "0" : "") + m);
    }
  }
  return ans;
};
