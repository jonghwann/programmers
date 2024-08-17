function solution(price) {
    let result = price;
    
    if(result >= 500000) {
        result *= 0.8;
    } else if(result >= 300000) {
        result *= 0.9;
    } else if(result >= 100000) {
        result *= 0.95;
    }
    
    return result % 1 === 0.5 ? Math.floor(result) : Math.round(result)
}