function solution(n, m, section) {
    let result = 0;
    let painted = 0;
    
    for (let i of section) {
        if (painted < i) {
            result++;
            painted = i + m - 1;
        }
    }
    
    return result;
}