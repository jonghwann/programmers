function solution(my_string, queries) {
  const arr = my_string.split('');
    
    for (const [s, e] of queries) {
        const sub = arr.slice(s, e + 1).reverse();
        
        for (let i = s; i <= e; i++) {
            arr[i] = sub[i - s];
        }
    }
    
    return arr.join('');
}