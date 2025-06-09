function solution(rank, attendance) {
    const filtered = rank.map((el, index) => [index, el]).filter(([i, _]) => attendance[i]);
    filtered.sort((a, b) => a[1] - b[1]);
    
    const [a, b, c] = filtered.slice(0, 3).map(([i, _]) => i);
    return 10000 * a + 100 * b + c;
}

