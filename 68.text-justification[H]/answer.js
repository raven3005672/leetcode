/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string []}
 */
var fullJustify = function (words, maxWidth) {
  const appendLine = (level, words, maxWidth, res, start) => {
    // Recursion terminatior (递归终止)
    if (start >= words.length) {
      return res;
    }

    // Process logic in current level (当前层的过程逻辑)
    // 看当前行能加入多少个 words 中的字符串, 将这些字符串保存在数组 rowArr 中
    let rowArr = [words[start]];
    let count = words[start].length;
    let i = start + 1;
    while (i < words.length && count + words[i].length < maxWidth) {
      count += words[i].length + 1;
      rowArr.push(words[i]);
      i++;
    }
    /**
     * 将数组 rowArr 中字符串按题目要求(左右对齐, 左对齐, 空格均匀分配, 不能均匀分配时左侧空格多于右侧空格)
     * 构成单个字符串, 并加入到数组 res 的末尾
     */
    let rowStr = '';
    if (i < words.length) {
      let space = maxWidth - count + rowArr.length - 1;
      let eachSpace = parseInt(space / (rowArr.length - 1));
      let extSpace = space % (rowArr.length - 1);
      for (let j = 0; j < rowArr.length; j++) {
        rowStr += rowArr[j];
        if (j !== rowArr.length - 1) {
          let space = eachSpace;
          if (extSpace > 0) {
            space += 1;
            extSpace--;;
          }
          while (space-- > 0) {
            rowStr += ' ';
          }
        }
      }
    } else {
      for (let j = 0; j < rowArr.length; j++) {
        if (j < rowArr.length - 1) {
          rowStr += rowArr[j] + ' ';
        } else {
          rowStr += rowArr[j];
        }
      }
    }
    while (rowStr.length < maxWidth) {
      rowStr += ' ';
    }
    res.push(rowStr);

    // Drill down (去下一层)
    return appendLine(level + 1, words, maxWidth, res, i);

  }
  return appendLine(0, words, maxWidth, [], 0);
};
