function solution(array) {
    let num = [...array].sort((a, b) => b - a)[0];
    return [num, array.indexOf(num)];
}