function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const unique = [...new Set(arr)];
    const counts = unique.map(num => arr.filter(x => x === num).length);
    
    if (unique.length === 1) {
        return 1111 * unique[0];
    } else if (unique.length === 2) {
        if (counts.includes(3)) {
            const p = unique[counts.indexOf(3)];
            const q = unique[counts.indexOf(1)];
            return (10 * p + q) ** 2;
        } else {
            const [p, q] = unique;
            return (p + q) * Math.abs(p - q);
        }
    } else if (unique.length === 3) {
        const pIndex = counts.indexOf(2);
        const p = unique[pIndex];
        const others = unique.filter((_, i) => i !== pIndex);
        return others[0] * others[1];
    } else {
        return Math.min(...arr);
    }
}