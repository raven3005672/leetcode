/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const p = new Map()
  for (let [x, _y] of stones) {
    let y = _y + 10000
    !p.has(x) && p.set(x, [x])
    !p.has(y) && p.set(y, [y])
    if (p.get(x) !== p.get(y)) {
      if (p.get(x).length < p.get(y).length) {
        [x, y] = [y, x]
      }
      p.get(x).push(...p.get(y))
      p.get(y).forEach(z => p.set(z, p.get(x)))
    }
  }
  return stones.length - (new Set(p.values())).size
};
