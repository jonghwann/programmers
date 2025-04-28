function solution(numbers) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    arr.forEach((el, index) => {
        numbers = numbers.replaceAll(el, index);
    })
    
    return Number(numbers);
}