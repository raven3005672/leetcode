/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let len = board.length;
    let row = Array.from({length: len}, () => []);
    let col = Array.from({length: len}, () => []);
    let block = Array.from({length: len}, () => []);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] !== '.') {
                let num = board[i][j] - '1';
                let blockIndex = ~~(i / 3) * 3 + ~~(j/3);
                if (row[i][num] || col[j][num] || block[blockIndex][num]) {
                    return false;
                } else {
                    row[i][num] = true;
                    col[j][num] = true;
                    block[blockIndex][num] = true;
                }
            }
        }
    }
    return true;
};
