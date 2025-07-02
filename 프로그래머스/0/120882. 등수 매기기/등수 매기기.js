function solution(score) {
  let arr = score.map(el => (el[0] + el[1]) / 2);
  let arr2 = [...arr].sort((a, b) => b - a);
  return arr.map(el => arr2.indexOf(el) + 1);
}