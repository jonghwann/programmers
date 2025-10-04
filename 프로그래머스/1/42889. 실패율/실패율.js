function solution(N, stages) {
    let result = [];
    
    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((el) => el >= i).length;
        let curr = stages.filter((el) => el === i).length;
        result.push([i, curr / reach]);
    }
    
    result.sort((a, b) => b[1] - a[1]);
    return result.map((el) => el[0]);
}