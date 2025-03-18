function solution(intStrs, k, s, l) {
    let result = [];
    
    for(let i of intStrs) {
        const num = Number(i.substr(s, l));
        if (num > k) {
            result.push(num);
        }
    }
    
    return result;
}