/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var map = new Map(), res = [];
    for(var i=0,len=cpdomains.length;i<len;i++){
        var arr = cpdomains[i].split(' '),count = Number(arr[0]),domain = arr[1];
        if(map.has(domain)){
            map.set(domain, map.get(domain) + count);
        }else{
            map.set(domain, count);    
        }
        var domain_1 = domain.slice(domain.lastIndexOf('.')+1);
        if(map.has(domain_1)){
            map.set(domain_1, map.get(domain_1) + count);
        }else{
            map.set(domain_1, count);    
        }
        if(domain.indexOf('.') !== domain.lastIndexOf('.')){
            var domain_2 = domain.slice(domain.indexOf('.')+1);
            if(map.has(domain_2)){
                map.set(domain_2, map.get(domain_2) + count);
            }else{
                map.set(domain_2, count);    
            }
        }
    }
    map.forEach((val, key) => {res.push(val + ' ' + key);});
    return res;
};