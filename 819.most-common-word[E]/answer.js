/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/([^a-zA-Z\s])/g, (m, $1)=>{
        if($1) return ' ';
    }).toLowerCase();
    var arr = paragraph.split(/\s+/);
    var map = new Map();
    for(var i=0;i<arr.length;i++){
        if(!banned.includes(arr[i])){
            if(map.has(arr[i])){
                map.set(arr[i], map.get(arr[i]) + 1);
            }else{
                map.set(arr[i], 1);
            }
        }
    }
    var res = [];
    map.forEach((v,k,m)=>{
        res.push({ke:k,val:v});
    });
    res.sort((a,b)=>b.val-a.val);
    return res[0].ke;
};