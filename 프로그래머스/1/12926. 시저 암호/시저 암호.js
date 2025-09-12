function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let result= '';

    for (var i = 0; i < s.length; i++) {
        let text = s[i];
        if (text === ' ') {
            result += ' '; 
            continue;
        }
        
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        
        if (index >= textArr.length) {
            index -= textArr.length;
        };
        
        result += textArr[index];
    }
    
    return result;
}