function solution(lottos, win_nums) {
    const result = [];
    const min = lottos.filter(el => win_nums.includes(el)).length;
    const max = lottos.filter(el => el === 0).length + min;

    max > 1 ? result.push(7 - max) : result.push(6);
    min > 1 ? result.push(7 - min) : result.push(6);

    return result;
}