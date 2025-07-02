function solution(quiz) {
    let result = [];
    
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        
        sum === Number(z) ? result.push("O") : result.push("X");
    });
    
    return result;
}