function solution(numLog) {
    let result = '';
    
    function calc (num1, num2) {
        if (num1 + 1 === num2) {
            result += 'w';
        } else if (num1 - 1 === num2) {
            result += 's';
        } else if (num1 + 10 === num2) {
            result += 'd';
        } else {
            result += 'a';
        }
    }
    
    for (let i = 0; i < numLog.length -1; i++) {
        calc(numLog[i], numLog[i + 1]);
    }
    
    return result;
}