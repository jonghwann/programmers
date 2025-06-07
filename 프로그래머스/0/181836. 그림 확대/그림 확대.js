function solution(picture, k) {
    const result = [];
    
    for (const line of picture) {
        const expandedLine = line.split('').map(ch => ch.repeat(k)).join('');
        
        for (let i = 0; i < k; i++) {
            result.push(expandedLine);
        }
    }
    
    return result;
}