function solution(polynomial) {
    let x = polynomial
        .split(' + ')
        .filter(v => v.includes('x'))
        .map(v => v.replace('x', '') || '1')
        .reduce((acc, cur) => acc + Number(cur), 0);

    let num = polynomial
        .split(' + ')
        .filter(v => !v.includes('x'))
        .reduce((acc, cur) => acc + Number(cur), 0);

    let result = [];
    x ? result.push(x === 1 ? 'x' : x + 'x') : null;
    num? result.push(num) : null;

    return result.join(' + ');
}