function solution(num_list) {
    let num1 = Number(num_list.filter(el => el % 2 !== 0).join(''))
    let num2 = Number(num_list.filter(el => el % 2 === 0).join(''))
    return num1 + num2
}