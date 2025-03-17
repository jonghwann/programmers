function solution(num, k) {
    const result = num.toString().indexOf(k) + 1;
    return result ? result : -1;
}