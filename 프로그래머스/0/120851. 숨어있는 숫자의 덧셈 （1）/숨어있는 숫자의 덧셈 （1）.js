function solution(my_string) {
    return my_string.split('').map(el => Number(el)).filter(el => el).reduce((acc, cur) => acc + cur)
}