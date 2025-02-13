function solution(a, b) {
    let num1 = a % 2 === 0 ? true : false;
    let num2 = b % 2 === 0 ? true : false;
    
    if (!num1 && !num2) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    } else if (num1 && num2) {
        return Math.abs(a - b);
    } else {
        return 2 * (a + b);
    }
}