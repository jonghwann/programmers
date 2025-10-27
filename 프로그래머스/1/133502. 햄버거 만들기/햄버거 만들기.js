function solution(ingredient) {
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        arr.push(ingredient[i]);
        
        if (
            arr[arr.length - 1] === 1 && 
            arr[arr.length - 2] === 3 &&
            arr[arr.length - 3] === 2 &&
            arr[arr.length - 4] === 1
           ) {
            arr.splice(-4);
            count++;
        }
    }
    
    return count;
}