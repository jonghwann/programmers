function solution(arr, query) {
    for(let i = 0; i < query.length; i++) {
        const idx = query[i]
        
        if (i % 2 === 0) {
            arr.splice(idx + 1, arr.length - (idx + 1));
        } else {
            arr.splice(0, idx);
        }
    }
    
    return arr;
}