function solution(n) {
  let count = 0;
  
  for (let i = 1; i <= n * 2; i++) {
      if (i % 3 !== 0 && !String(i).includes('3')) {
          count++;
          if (count === n) {
              return i;
          }
      }
  }
}