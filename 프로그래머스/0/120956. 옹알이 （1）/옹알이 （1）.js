function solution(babbling) {
  let result = 0;
  let regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) result++;
  });

  return result;
}