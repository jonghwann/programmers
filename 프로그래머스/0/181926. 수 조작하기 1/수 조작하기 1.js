function solution(n, control) {
    let result = n;
    
    for (let i of control) {
        if (i === "w") {
            result += 1
        } else if (i === "s") {
            result -= 1
        } else if (i === 'd') {
            result += 10 
        } else if (i === 'a') {
            result -= 10
        }
    }
    
    return result
}