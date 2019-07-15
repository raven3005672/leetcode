/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var L=parseInt(Math.pow(area,0.5)),
        W=parseInt(area/L);
    while(true){
        if(L*W===area&&L>=W)
            break;
        L+=1;
        W=parseInt(area/L);
    }
    return [L,W];
};