/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    var r = grid.length,
        c = grid[0].length,
        times = 0,
        flag = true,
        badArr = [];
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (!Array.isArray(badArr[i])) badArr[i] = [];
            if (grid[i][j] === 2) {
                badArr[i][j] = times
            } else {
                badArr[i][j] = -1
            }
        }
    }
    while (flag) {
        flag = false;
        for (var i = 0; i < r; i++) {
            for (var j = 0; j < c; j++) {
                if (grid[i][j] === 2 && times === badArr[i][j]) {
                    if (i > 0 && grid[i - 1][j] === 1) {
                        grid[i - 1][j] = 2;
                        badArr[i - 1][j] = times + 1;
                        flag = true
                    }
                    if (j > 0 && grid[i][j - 1] === 1) {
                        grid[i][j - 1] = 2;
                        badArr[i][j - 1] = times + 1;
                        flag = true
                    }
                    if (i < r - 1 && grid[i + 1][j] === 1) {
                        grid[i + 1][j] = 2;
                        badArr[i + 1][j] = times + 1;
                        flag = true
                    }
                    if (j < c - 1 && grid[i][j + 1] === 1) {
                        grid[i][j + 1] = 2;
                        badArr[i][j + 1] = times + 1;
                        flag = true
                    }
                }
            }
        }
        if (flag) times++
    }
    return grid.some((item) => item.includes(1)) ? -1 : times
};