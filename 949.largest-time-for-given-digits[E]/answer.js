/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    A.sort((a,b) => {  // 从大到小排序
        return b - a
    })
    // 1-4位遍历 ，第一个返回的便是结果
    for (let i=0; i<4; i++) {
        if (A[i] >2) {
            continue
        }
        for (let j=0; j<4; j++) {
            if (A[i] ===2 && A[j] > 3) {
                continue
            }
            if (i!==j) {
                for (let k=0; k<4; k++) {
                    if (A[k] > 5) {
                        continue
                    }
                    if (i!==k && j!==k) {
                        for (let l=0; l<4; l++) {
                            if (i!==l && j!==l && k!==l) {
                                return `${(A[i]*10||'0')+A[j]}:${(A[k]*10||'0')+A[l]}`
                            }
                        }
                    }
                }
            }
        }
    }
    return ''
};