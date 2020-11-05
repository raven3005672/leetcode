/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);
  while (queue.length) {
    // 当前出列的单词
    const [word, level] = queue.shift();
    if (word == endWord) {
      return level;
    }
    // 遍历当前单词的所有字符
    for (let i = 0; i < word.length; i++) {
      // 对应26个字母
      for (let c = 97; c <= 122; c++) {
        // 形成新词
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        // 单词表里有这个新词
        if (wordSet.has(newWord)) {
          // 作为下一层的词入列
          queue.push([newWord, level + 1]);
          // 避免该词重复入列
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
};

/**
 * 思路：BFS
 * 从起点词触发，每次变动一个字母，经过n次变换，变成终点词，希望n尽量小。
 * 我们需要找出邻接关系，比如hit它变一个字母会变成 _it、h_t、hi_ 形式的单词。
 * 然后看这个新词是否存在于单词表，如果存在，就找到了一个下一层的转换词。
 * 同时，要避免重复访问，比如 hit -> hot -> hit 这样变回来，只会徒增转换的长度。
 * 因此，要将下一个转换词从单词表中删除（单词表的单词是唯一的）。
 * 可能下一层的单词有多个，都要maintain下来考察，哪一条转换路径先遇到终点词，它就最短。
 */