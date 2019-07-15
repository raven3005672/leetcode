/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //主要考虑边界条件：当n为0，开头和结尾位置的连续0
    if(n === 0) return true;
    if(!flowerbed.includes(1)){
        return (flowerbed.length+1)/2 >= n;
    }
    var res = flowerbed.join('').split('1');
    var temp;
    for(var i=0;i<res.length;i++){
        if(i===0 || i === res.length-1){
            temp = res[i].length;
            while(temp>=2){
                n--;
                if(n==0){
                    return true;
                }
                temp -= 2;
            }
        }else{
            temp = res[i].length;
            while(temp>2){
                n--;
                if(n==0){
                    return true;
                }
                temp -= 2;
            }
        }
    }
    return n === 0;
};

// 思考：前后补零