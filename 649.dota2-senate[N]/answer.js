/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  const radiant = [], dire = [];

  for (const [i, ch] of Array.from(senate).entries()) {
    if (ch === 'R') {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  while (radiant.length && dire.length) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + n);
    } else {
      dire.push(dire[0] + n);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length ? "Radiant" : "Dire";
};

/**
 * 思路：循环队列
 * 我们以天辉方的议员为例。当一名天辉方的议员行使权利时：
 * 如果目前所有的议员都为天辉方，那么该议员可以直接宣布天辉方取得胜利；
 * 如果目前仍然有夜魇方的议员，那么这名天辉方的议员只能行使「禁止一名参议员的权利」这一项权利。
 * 显然，该议员不会令一名同为天辉方的议员丧失权利，所以他一定会挑选一名夜魇方的议员。
 * 那么应该挑选哪一名议员呢？容易想到的是，应该贪心地挑选按照投票顺序的下一名夜魇方的议员。
 * 这也是很容易形象化地证明的：既然只能挑选一名夜魇方的议员，那么就应该挑最早可以进行投票的那一名议员；如果挑选了其它较晚投票的议员，那么等到最早可以进行投票的那一名议员行使权利时，一名天辉方议员就会丧失权利，这样就得不偿失了。
 * 由于我们总要挑选投票顺序最早的议员，因此我们可以使用两个队列 radiant 和 dire 分别按照投票顺序存储天辉方和夜魇方每一名议员的投票时间。随后我们就可以开始模拟整个投票的过程：
 * 如果此时 radiant 或者 dire 为空，那么就可以宣布另一方获得胜利；
 * 如果均不为空，那么比较这两个队列的首元素，就可以确定当前行使权利的是哪一名议员。
 * 如果 radiant 的首元素较小，那说明轮到天辉方的议员行使权利，其会挑选 dire 的首元素对应的那一名议员。
 * 因此，我们会将 dire 的首元素永久地弹出，并将 radiant 的首元素弹出，增加 n 之后再重新放回队列，这里 n 是给定的字符串 senate 的长度，即表示该议员会参与下一轮的投票。
 * 同理，如果 dire 的首元素较小，那么会永久弹出 radiant 的首元素，剩余的处理方法也是类似的。
 * 这样一来，我们就模拟了整个投票的过程，也就可以得到最终的答案了。
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */