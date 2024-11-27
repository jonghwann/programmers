function solution(num_str) {
    return num_str.split('').map(el => Number(el)).reduce((a, b) => a + b);
}