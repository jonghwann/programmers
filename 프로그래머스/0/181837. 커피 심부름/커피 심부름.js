function solution(order) {
    return order.map(el => {
        if (el.includes('americano')) {
            return 4500;
        } else if (el.includes('cafelatte')) {
            return 5000;
        } else if ('anything') {
            return 4500;
        }
    }).reduce((a, b) => a + b);
}