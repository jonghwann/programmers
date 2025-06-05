function solution(arr, queries) {
    const result = [];
    
    for (const [s, e, k] of queries) {
        const subArr = arr.slice(s, e + 1);
        const filtered = subArr.filter(num => num > k);
        
        if (filtered.length === 0) {
            result.push(-1);
        } else {
            result.push(Math.min(...filtered));
        }
    }
    
    return result;
}