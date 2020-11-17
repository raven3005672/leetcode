/**
 * @param {number[]} target
 * @return {boolean}
 */
var isMagic = function (target) {
  let len = target.length;
  //初始化数组
  let arr;
  let mo = [];
  const wash = (arr, mo) => {
    let temp = []; //用于盛放奇数位
    let moveArr = []; //用于提取偶数位
    for (let i = 0; i < arr.length; i++) {
      if (!((i + 1) % 2)) {
        moveArr.push(arr[i]);
      } else temp.push(arr[i]);
    }
    let ret = moveArr.concat(temp);
    if (arr.length <= k) {
      mo.push(...ret);
      return [];
    }
    else mo = mo.push(...ret.slice(0, k));
    ret.splice(0, k);
    return ret;
  };
  let k = 1;
  while (k <= len) {
    mo = [];
    arr = new Array(len);
    for (let j = 0; j < len; j++) arr[j] = j + 1;
    let cursor = 0;
    while (mo.length !== len) {
      arr = wash(arr, mo);
      if (!isSame(mo, target.slice(0, mo.length), k)) break;
    }
    if (mo.length === len && isSame(mo, target, k)) {
      return true;
    }
    k++;
  }
  return false;
};
function isSame(a, b, k) {
  for (let i = a.length - 1; i >= a.length - k; i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/**
 * 思路：迭代模拟洗牌 + 剪枝
 */