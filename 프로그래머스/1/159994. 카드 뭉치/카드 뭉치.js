function solution(cards1, cards2, goal) {
    for (let i of goal) {
        if (cards1.indexOf(i) === 0) {
            cards1.shift();
        } else if (cards2.indexOf(i) === 0) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    
    return "Yes";
}