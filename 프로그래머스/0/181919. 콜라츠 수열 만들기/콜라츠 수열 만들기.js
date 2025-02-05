function solution(n) {
    let arr = [n];
    
    while (arr[arr.length - 1] !== 1) {
        if (arr[arr.length - 1] % 2 === 0) {
            arr.push(arr[arr.length - 1] / 2)
        } else {
            arr.push(arr[arr.length - 1] * 3 + 1)
        }
    }
    
    return arr;
}