function solution(a, b, c) {
    let size = new Set([a, b , c]).size
    let sum1 = a + b + c;
    let sum2 = a ** 2 + b ** 2 + c ** 2;
    let sum3 = a ** 3 + b ** 3 + c ** 3;
    
    switch (size) {
        case 3:
            return sum1;
        case 2:
            return sum1 * sum2;
        case 1:
            return sum1 * sum2 * sum3;
    }
}