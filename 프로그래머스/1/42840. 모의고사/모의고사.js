function solution(answers) {
    let result = [];
    const pers1 = [1, 2, 3, 4, 5];
    const pers2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pers3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if(answers[i] == pers1[i % pers1.length]) count[0]++;
        if(answers[i] == pers2[i % pers2.length]) count[1]++;
        if(answers[i] == pers3[i % pers3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    
    for (let i = 0; i < count.length; i++) {
        if (max === count[i]) result.push(i + 1);
    }

    return result;
}