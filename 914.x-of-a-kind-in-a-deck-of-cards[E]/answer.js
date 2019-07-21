/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    deck.sort((a,b)=>a-b);
    var map = new Map();
    for(var i=0;i<deck.length;i++){
        if(!map.has(deck[i])){
            map.set(deck[i], 1);
        }else{
            map.set(deck[i], map.get(deck[i])+1);
        }
    }
    var res = [];
    for(var val of map.values()){
        res.push(val);
    }
    res.sort((a,b)=>a-b);
    var min = res[0];
    if(min < 2) return false;
    //找到公约数为1的直接返回false;
    return !res.some((item, index)=>{
        if(index>0) return getResult(item, min) === 1;
    })
    
    function getResult(a, b){
        if(b === 0) return a;
        return getResult(b, a%b);
    }
};