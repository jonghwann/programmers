function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    
    if (rows === cols) {
        return arr;
    } else if (cols > rows) {
        const zeroRow = new Array(cols).fill(0);
        const newArr = arr.slice();
        
        for (let i = 0; i < cols - rows; i++) {
            newArr.push(zeroRow);
        }
        
        return newArr;
    } else {
        return arr.map(row => [...row, ...new Array(rows - cols).fill(0)]);
    }
}