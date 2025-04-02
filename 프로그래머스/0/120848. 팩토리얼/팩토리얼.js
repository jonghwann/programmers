function solution(n) {
    let a = 1;
    let b = 1;
    
    while (a <= n) {
        b++;
        a *= b;
    }
    
    return b - 1;
}