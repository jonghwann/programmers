function solution(l, r) {
    const result = [];
    
    for (let i = l; i <= r; i++) {        
        if ([...String(i)].every(el => el === '0' || el === '5')) {
            result.push(i);
        }
    }
    
    return result.length ? result : [-1];
}