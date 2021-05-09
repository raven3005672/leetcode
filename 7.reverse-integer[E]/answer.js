/**
 * @param {number} x
 * @return {number}
 */
// 测试用例
var x = 1534236469;
var reverse = function (x) {
  let flag = x >= 0,
    [...arr] = x.toString(10),
    resultWithoutFlag = parseInt(arr.reverse().join(''));

  if (resultWithoutFlag <= -Math.pow(2, 31) || resultWithoutFlag >= Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return flag ? resultWithoutFlag : -resultWithoutFlag;
  }

};
console.log(reverse(x))
// 翻转整数与翻转字符串类比
// 重复弹出x的最后一位数字，并推入rev的后面。最后rev与x相反
// pop
// pop = x % 10;
// x /= 10;
// push
// temp = rev * 10 + pop;
// rev = temp;
// 需要判断temp是否溢出，后略


var reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    rev = rev * 10 + digit;
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return rev;
};
