function solution(arr) {
    let power = 1;
    
    while (power < arr.length) {
        power *= 2;
    }
    
    return [...arr, ...Array(power - arr.length).fill(0)];
}