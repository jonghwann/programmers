function solution(x, n) {
    return Array(n).fill(x).map((el, i) => (i + 1) * el);
}