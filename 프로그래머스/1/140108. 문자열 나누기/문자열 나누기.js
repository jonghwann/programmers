function solution(s) {
    let result = 0;
    let current;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (count === 0) {
            result++;
            current = s[i];
            count = 1;
        } else {
            if (current !== s[i]) count--;
            else count++;
        }
    }

    return result;
}