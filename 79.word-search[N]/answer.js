/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 定义方向
    let directs = [[0,1], [0,-1], [1,0],[-1,0]];
    let m = board.length;
    if (!m) return false;
    let n = board[0].length;
    let mark = Array.from({length: m}, () => Array.from({length: n}, () => 0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                mark[i][j] = 1;
                if (backtrack(i, j, mark, board, word.slice(1), directs) == true) {
                    return true
                } else {
                    mark[i][j] = 0;
                }
            }
        }
    }
    return false;
};

var backtrack = function(i, j, mark, board, word, directs) {
    if (word.length == 0) return true;
    let m = board.length;
    let n = board[0].length;
    for (let k = 0; k < directs.length; k++) {
        let ii = i + directs[k][0];
        let jj = j + directs[k][1];
        if (0 <= ii && ii < m && 0 <= jj && jj < n && board[ii][jj] == word[0]) {
            if (mark[ii][jj] == 1) {
                continue;
            }
            mark[ii][jj] = 1;
            if (backtrack(ii, jj, mark, board, word.slice(1), directs) == true) {
                return true;
            } else {
                mark[ii][jj] = 0;
            }
        }
    }
    return false;
}
