/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    var arr = [];
    obstacles.forEach((item) => arr.push(item.toString()));
    //dx[di]为当前前进的位移
    var di = 0;
    var dx = [0,1,0,-1];
    var dy = [1,0,-1,0];
    var len = commands.length;
    var i = 0;
    var res = 0;
    var x = 0, y = 0;
    for (var i = 0; i < commands.length; i++) {
        var cmd = commands[i]
        if (cmd === -2) {
            di = (di + 3) % 4
        } else if (cmd === -1) {
            di = (di + 1) % 4
        } else {
            while (cmd > 0) {
                if (!arr.includes([x + dx[di], y + dy[di]] + '')) {
                    x += dx[di]
                    y += dy[di]
                    res = Math.max(res, x*x + y*y)
                }
                cmd--
            }
        }
    }
    return res;
};