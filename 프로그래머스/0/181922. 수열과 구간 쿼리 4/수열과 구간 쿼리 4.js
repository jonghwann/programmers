function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        for (let i = s + (k - (s % k)) % k; i <= e; i += k) {
            arr[i] += 1;
        }
    });
    
    return arr;
}