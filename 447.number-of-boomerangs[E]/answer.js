/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    // 因为部分求出来的距离开根号后变成了小数，所以直接用其平方作为距离
    function computed(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2; 
        return dx * dx + dy * dy;
    }
    let len = points.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        let arr = [];
        // 计算每一个结点与i结点的距离，并以该距离值为键，距离相同的结点的个数为值存入数组中
        for (let j = 0; j < len; j++) {
            if (i === j) continue;
            let dis = computed(points[i][0], points[i][1], points[j][0], points[j][1]);
            arr[dis] = arr[dis] ? arr[dis] + 1 : 1;
        }
        // 把和i结点距离相同的结点进行组合，求出以i结点为首的回旋镖数量
        for (let index in arr) {
            if (arr[index] >= 2) {
                let tem = Number(arr[index]);
                sum += tem * (tem - 1);
            }
        }
    }
    return sum;
};