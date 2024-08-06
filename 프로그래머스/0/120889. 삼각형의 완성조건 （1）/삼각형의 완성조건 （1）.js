function solution(sides) {
    let arr = sides.sort();
    return arr[2] >= arr[0] + arr[1] ? 2 : 1
}