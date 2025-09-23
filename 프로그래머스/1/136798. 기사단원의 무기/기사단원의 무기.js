function solution(number, limit, power) {
    let arr = [];
    
    for (let i = 1; i <= number; i++) {
        arr.push(getDivisorsCount(i));
    }
    
    return arr.map(el => el > limit ? power : el).reduce((a, b) => a + b);
}

function getDivisorsCount(n) {
    let count = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++;
            
            if (i !== n / i) {
                count++;
            }
        }
    }
    
    return count;
}