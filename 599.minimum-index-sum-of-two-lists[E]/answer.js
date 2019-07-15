/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const res=[];
    const list=list1.concat(list2);
    const hash={};
    const thash={};
    const len=list1.length;
    for(let i=0;i<list.length;i++){
        if(hash[list[i]]!==undefined){
            thash[list[i]]=hash[list[i]]+i-len;
        }
        else{
            hash[list[i]]=i;
        }
    }
    const arr=Object.keys(thash);
    arr.sort((a,b)=>{return thash[a]-thash[b]});
    const num=thash[arr[0]];
    arr.forEach((n)=>{
        if(thash[n]===num){
            res.push(n);
        }
    })
    return res;
};