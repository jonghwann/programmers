function solution(n) {
    return new Array(n).fill(0).map((el, index) => {
        let arr = new Array(n).fill(0);
        arr[index] = 1;
        return arr;
    });
}