function solution(num_list) {
    const num1 = num_list.reduce((a, c) => a * c)
    const num2 = num_list.reduce((a, c) => a + c) ** 2
    return num1 > num2 ? 0 : 1
}