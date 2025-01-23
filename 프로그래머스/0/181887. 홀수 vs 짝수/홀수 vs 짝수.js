function solution(num_list) {
    const arr1 = num_list.filter((el, index) => index % 2 === 0).reduce((a, b) => a + b);
    const arr2 = num_list.filter((el, index) => index % 2 !== 0).reduce((a, b) => a + b);
    return arr1 > arr2 ? arr1 : arr2;
}