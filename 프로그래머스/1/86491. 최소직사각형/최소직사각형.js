function solution(sizes) {
    let w = 0;
    let h = 0;
    
    sizes.forEach(el => {
        const [a, b] = el.sort((a, b) => a - b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}