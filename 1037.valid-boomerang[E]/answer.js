/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    //说白了就是能组成三角形的三个点
    function isTrangel(a, b, c){
        if(a + b > c && a + c > b && b + c > a){
            return true;
        }
        return false;
    }
    var t1 = Math.sqrt(Math.pow(Math.abs(points[0][0] - points[1][0]), 2) + Math.pow(Math.abs(points[0][1] - points[1][1]), 2));
    var t2 = Math.sqrt(Math.pow(Math.abs(points[1][0] - points[2][0]), 2) + Math.pow(Math.abs(points[1][1] - points[2][1]), 2));
    var t3 = Math.sqrt(Math.pow(Math.abs(points[2][0] - points[0][0]), 2) + Math.pow(Math.abs(points[2][1] - points[0][1]), 2));
    return isTrangel(t1, t2, t3);
};