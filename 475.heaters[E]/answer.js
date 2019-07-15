/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    //复杂度O(mn)，针对每一个房间，找离它最近的供暖器
    function FindNearstHeater(house, heaters){
        var min = 1000000000;
        for(var i = 0 ; i < heaters.length; i++){
            if(Math.abs(heaters[i] - house) < min)
                min = Math.abs(heaters[i] - house)
        }
        return min;
    }
    var min = 0;
    for(var i = 0 ; i < houses.length; i++){
        var dist = FindNearstHeater(houses[i], heaters);
        min = dist > min ? dist : min;
    }
    return min;
};