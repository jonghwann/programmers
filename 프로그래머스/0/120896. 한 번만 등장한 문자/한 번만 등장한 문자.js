function solution(s) {
  let result = [];

  for (let i of s) {
    if (s.indexOf(i) === s.lastIndexOf(i)) {
      result.push(i);
    }
  }
  
  return result.sort().join("");
}