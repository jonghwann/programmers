function solution(a, d, included) {
    return included.map((el, index) => ({a: el, b: a + (index * d)})).filter(el => el.a).reduce((a, b) => a + b.b, 0);
}