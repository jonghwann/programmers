function solution(number) {
    return number.split("").map(el => Number(el)).reduce((a, b) => a + b) % 9;
}