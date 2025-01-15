function solution(arr, n) {
    return arr.length % 2 !== 0 ? arr.map((el, index) => index % 2 === 0 ? el + n : el) : arr.map((el, index) => index % 2 !== 0 ? el + n : el);
}