function solution(arr) {
    const transform = n => {
        if (n >= 50 && n % 2 === 0) return n / 2;
        if (n < 50  && n % 2 === 1) return 2 * n + 1;
        return n;
    };
    
    const isStable = n => {
        return (n >= 50 && n % 2 === 1) || (n <  50 && n % 2 === 0)
    };
    
    let answer = 0;
    
    for (let n of arr) {
        let cnt = 0;
        
        while (!isStable(n)) {
            n = transform(n);
            cnt++;
        }
        
        answer = Math.max(answer, cnt);
    }
    
    return answer;
}