function solution(array, n) {
    let min = Math.min(...array.map(a => Math.abs(a - n)));
    return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === min);
}