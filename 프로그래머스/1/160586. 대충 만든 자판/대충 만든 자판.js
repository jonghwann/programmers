function solution(keymap, targets) {
    const result = [];
    const map = {};
    
    for (const i of keymap) {
        i.split('').map((el, index) => map[el] = (map[el] < index + 1 ? map[el] : index + 1));
    }
    
    for (const i of targets) {
        result.push(i.split('').reduce((acc, cur) => acc += map[cur], 0) || -1);
    }
    
    return result;
}