/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr=[];
    for(let i=0;i<arr2.length;i++){
        for(let n=0;n<arr1.length;n++){
            if(arr2[i]===arr1[n]){
                arr.push(arr1[n]);
                arr1.splice(n,1);
                n=n-1;
            }
        }
    }
    arr1.sort(function (a,b) {
        return a-b;
    });
    return arr.concat(arr1);
};