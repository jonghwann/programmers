function solution(num_list) {
    return num_list.findIndex(el => Math.sign(el) === -1);
}