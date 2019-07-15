/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    //深度优先遍历
    if(image[sr][sc] === newColor) return image;
    var r = image.length;
    var c = image[0].length;
    var oldColor = image[sr][sc];
    function dfs(x, y){
        image[x][y] = newColor;
        if(x>0 && image[x-1][y] === oldColor) dfs(x-1,y);
        if(y>0 && image[x][y-1] === oldColor) dfs(x, y-1);
        if(x<r-1 && image[x+1][y] === oldColor) dfs(x+1,y);
        if(y<c-1 && image[x][y+1] === oldColor) dfs(x, y+1);
    }
    dfs(sr, sc);
    return image;
};