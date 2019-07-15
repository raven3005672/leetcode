/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var res=0;
    for(var i=0;i<grid.length;i++){
        for(var ii=0;ii<grid[0].length;ii++){
            if(grid[i][ii]==1){
                if(i-1<0||grid[i-1][ii]==0)
                    res+=1;
                if(i+1>=grid.length||grid[i+1][ii]==0)
                    res+=1;
                if(ii-1<0||grid[i][ii-1]==0)
                    res+=1;
                if(ii+1>=grid[0].length||grid[i][ii+1]==0)
                    res+=1;
            }
        }
    }
    return res;
};