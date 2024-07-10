function solution(num_list) {
    const num1 = num_list.reduce((a, b) => a * b)
    const num2 = num_list.reduce((a, b) => a + b) ** 2
    return num1 > num2 ? 0 : 1
}