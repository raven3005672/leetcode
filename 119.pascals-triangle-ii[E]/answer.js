/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [];
  let a = 1;
  for (let i = 0; i <= rowIndex; i++) {
    arr.push(a)
    a = a * (rowIndex - i) / (i + 1)
  }
  return arr
}

var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; ++i) {
    for (let j = i; j > 0; --j) {
      row[j] += row[j - 1];
    }
  }
  return row;
};
