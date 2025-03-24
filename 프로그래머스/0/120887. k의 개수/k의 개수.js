function solution(i, j, k) {
    let result = '';
    
    for (i; i <= j; i++) {
        result += i;
    }
    
    return result.split(k).length - 1;
}