/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let sum = 0;
    for(let i=0,len=grid.length;i<len;i++) {
        let row = grid[i];
        for(let j=0,l=row.length;j<l;j++) {
            if(row[j]>0) {
                sum += (6*row[j] - (row[j]-1)*2)
                if(i>0 && grid[i-1][j]) {
                   sum -= (row[j]<grid[i-1][j])?row[j]:grid[i-1][j]
                }
                if(i<len-1 && grid[i+1][j]) {
                   sum -= (row[j]<grid[i+1][j])?row[j]:grid[i+1][j] 
                }
                if(j>0 && grid[i][j-1]) {
                    sum -= (row[j]<grid[i][j-1])?row[j]:grid[i][j-1]
                }
                if(j<l-1 && grid[i][j+1]) {
                    sum -= (row[j]<grid[i][j+1])?row[j]:grid[i][j+1]
                }
            }
        }
    }
    return sum;
};