function solution(a, b, n) {
    let result = 0;
    
    while (n >= a) {
        n = n - a + b;
        result += b;
    }
    
    return result;
}