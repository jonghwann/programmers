function solution(s) {
  let result = [];
  
  for (let i of s.split(" ")) {
      if (i !== "Z") {
          result.push(Number(i));
      }
      
      if (i === "Z") {
          result.push(-result[result.length - 1]);
      }
  }
    
  return result.reduce((a, b) => a + b);
}