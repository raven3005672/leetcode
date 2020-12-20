/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let sar = str.split(' ');
  if (sar.length !== pattern.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== sar.indexOf(sar[i])) {
      return false
    }
  }
  return true;
};

// 如果一个数出现两次那它第一出线的位置肯定不变，所以用indexOf找到字符第一次出现的位置

// 哈希表
var wordPattern = function (pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  for (const [i, word] of words.entries()) {
    const ch = pattern[i];
    if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
      return false;
    }
    word2ch.set(word, ch);
    ch2word.set(ch, word);
  }
  return true;
};

