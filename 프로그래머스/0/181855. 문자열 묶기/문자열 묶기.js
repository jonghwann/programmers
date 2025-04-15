function solution(strArr) {
    let obj = {};
    
    for (let i of strArr) {
       obj[i.length] = (obj[i.length] ?? 0) + 1; 
    }
    
    let max = 0;
    
    for(let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }
    
    return max;
}