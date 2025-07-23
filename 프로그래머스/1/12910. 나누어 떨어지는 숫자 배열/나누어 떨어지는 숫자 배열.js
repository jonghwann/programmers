function solution(arr, divisor) {
    const divisible = arr.filter(el => el % divisor === 0);
    return divisible.length ? divisible.sort((a, b) => a - b) : [-1];
}