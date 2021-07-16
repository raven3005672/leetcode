/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const sb = [];
  while (columnNumber !== 0) {
    columnNumber--;
    sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join('');
};
