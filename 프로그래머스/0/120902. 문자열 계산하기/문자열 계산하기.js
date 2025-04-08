function solution(my_string) {
    let operator = '';
    let operand = [];
    
    for (let i of my_string.split(' ')) {
        if (i === '+') {
            operator += '+';
        } else if (i === '-') {
            operator += '-';
        } else {
            operand.push(Number(i));
        }
    }
    
    return operand.reduce((acc, cur, index) => {
        return operator[index - 1] === '+' ? acc + cur : acc - cur;
    });
}