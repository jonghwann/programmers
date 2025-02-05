function solution(n) {
    let arr = [n];
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        
        arr.push(n);
    }
    
    return arr;
}