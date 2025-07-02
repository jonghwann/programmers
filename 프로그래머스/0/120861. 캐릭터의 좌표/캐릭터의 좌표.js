function solution(keyinput, board) {
    let result = [0,0];
    
    for (let p of keyinput) {
        switch(p) {
            case 'left': if (-result[0] < board[0]/2-1) result[0]--; break;
            case 'right': if (result[0] < board[0]/2-1) result[0]++; break;
            case 'up': if (result[1] < board[1]/2-1) result[1]++; break;
            case 'down': if (-result[1] < board[1]/2-1) result[1]--; break;
        }
    }result
    
    return result;
}