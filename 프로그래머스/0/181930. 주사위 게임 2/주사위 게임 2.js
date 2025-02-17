function solution(a, b, c) {
    let size = new Set([a, b , c]).size
    
    if (size === 3) {
        return a + b + c;
    } else if (size === 2) {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    } else {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(a, 2) + Math.pow(b, 2)) * (Math.pow(c, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    }
}