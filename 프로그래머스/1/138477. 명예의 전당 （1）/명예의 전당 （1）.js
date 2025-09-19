function solution(k, score) {
    let arr = [];
    let result = [];
    
    for (let i of score) {
        arr.push(i);
        arr.sort((a, b) => b - a).splice(k);
        result.push(Math.min(...arr));
    }
    
    return result;
}