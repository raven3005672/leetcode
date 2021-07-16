/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();
  const length = s.length;
  for (let i = 0; i < length; i++) {
    const c = s[i];
    const frequency = (map.get(c) || 0) + 1;
    map.set(c, frequency);
  }
  const list = [...map.keys()];
  list.sort((a, b) => map.get(b) - map.get(a));
  const sb = [];
  const size = list.length;
  for (let i = 0; i < size; i++) {
    const c = list[i];
    const frequency = map.get(c);
    for (let j = 0; j < frequency; j++) {
      sb.push(c);
    }
  }
  return sb.join('');
};


var frequencySort = function (s) {
  const mp = new Map();
  let maxFreq = 0;
  const length = s.length;
  for (const ch of s) {
    const frequency = (mp.get(ch) || 0) + 1;
    mp.set(ch, frequency);
    maxFreq = Math.max(maxFreq, frequency);
  }
  const buckets = new Array(maxFreq + 1).fill(0).map(() => new Array());
  for (const [ch, num] of mp.entries()) {
    buckets[num].push(ch);
  }
  const ret = [];
  for (let i = maxFreq; i > 0; i--) {
    const bucket = buckets[i];
    for (const ch of bucket) {
      for (let k = 0; k < i; k++) {
        ret.push(ch);
      }
    }
  }
  return ret.join('');
};
