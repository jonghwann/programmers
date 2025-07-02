function solution(num, total) {
    let result = [];
    let start = (total * 2 / num - num + 1) / 2;
    
    for (let i = 0; i < num; i++) {
        result.push(start);
        start++;
    }
    return result;
}