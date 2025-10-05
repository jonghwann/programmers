function solution(dartResult) {
    const numStack = [];
    const numArray = dartResult.replace(/[^0-9]/g, " ").split(" ").filter(el => el);
    const strArray = dartResult.replace(/[0-9]/g, "").split("").filter(el => el.trim());
    
    while (numArray.length) {
        let num = numArray.shift();
        let str = strArray.shift();
        
        num = num ** {S: 1, D: 2, T: 3}[str];

        if (["*", "#"].includes(strArray[0])) {
            str = strArray.shift();

            num *= "*" == str ? 2 : -1;

            if ("*" == str) {
                numStack[numStack.length-1] *= 2;
            }
        }
        
        numStack.push(num);         
    }   

    return numStack.reduce((acc, cur) => acc + cur, 0);
}