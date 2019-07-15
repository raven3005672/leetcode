/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let isEqual = function (a,b) {
        var r = true;
        for(var k in a){
            if(a[k] !== b[k]){
                r = false;
                break;
            }
        }
        return r;
    }
    var tl = p.length;
    var result = [];
    let maps = new Array(26);
    let mapp = new Array(26);
    for (var p1 of p){
        var key = p1.charCodeAt(0)-97;
        mapp[key] ? mapp[key] += 1 : mapp[key] = 1;
    }
    for(var i in s){
        var key1 = s[i].charCodeAt(0)-97;
        maps[key1] ? maps[key1]+=1 : maps[key1] = 1;
        if(i>=tl){
            maps[s[i-tl].charCodeAt(0)-97] -=1
        }
        if (isEqual(mapp,maps)){
            result.push(i-tl+1)
        }
    }
    return result;
};