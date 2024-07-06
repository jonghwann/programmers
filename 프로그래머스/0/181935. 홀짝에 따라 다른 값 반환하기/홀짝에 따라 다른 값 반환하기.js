function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % 2 === 0) {
            if (i % 2 === 0) {
                result += Math.pow(i, 2)
            }
        } else {
            if (i % 2 !== 0) {
                result += i;
            }   
        }
    }
    
    return result
}