function solution(my_string, indices) {
    return my_string.split('').filter((el, index) => !indices.includes(index)).join('');
}