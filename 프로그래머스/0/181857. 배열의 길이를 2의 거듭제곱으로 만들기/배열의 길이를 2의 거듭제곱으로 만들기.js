function solution(arr) {
    const length = arr.length;
    let power = 1;
    
    while (power < length) {
        power *= 2;
    }
    
    const fillCount = power - length;
    const fillArray = Array(fillCount).fill(0);
    
    return [...arr, ...fillArray];
}