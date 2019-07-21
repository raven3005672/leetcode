/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let S = new Set(A.map(string => {
        const subset = string
            .split('')
            .reduce((acc, cur, index) => {
                acc[index % 2].push(cur)
                return acc
            }, [
                [],
                []
            ])
        return subset[0].sort().join('') + subset[1].sort().join('')
    }))

    return S.size
};