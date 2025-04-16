function solution(my_string) {
    return my_string.replace(/[A-z]/g, " ").split(' ').map(Number).reduce((a, b) => a + b);
}