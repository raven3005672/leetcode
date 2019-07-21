/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    //题解：从顶部看，投影面积为网格中非零值的数目，从侧面看，为网格中每一行的最大值，从前面看为网格中每一列的最大值
    var row = grid.length;
    var res = 0;
    for(var i=0;i<row;i++){
        var side = 0, ahead = 0, top = 0;
        for(var j=0;j<row;j++){
            if(grid[i][j] > 0) top++;
            side = Math.max(side, grid[i][j]);
            ahead = Math.max(ahead, grid[j][i]);
        }
        res += top + side + ahead;
    }
    return res;
};