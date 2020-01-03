/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) { 
    return parseInt(str) < Math.pow(-2 , 31) ? Math.pow(-2 , 31) : (parseInt(str) > Math.pow(2 , 31) - 1 ? Math.pow(2 , 31) - 1 : ((parseInt(str) >= Math.pow(-2 , 31) && parseInt(str) <= Math.pow(2 , 31) - 1) ? parseInt(str) : 0)) 
};