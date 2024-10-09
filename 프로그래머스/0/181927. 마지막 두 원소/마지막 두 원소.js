function solution(num_list) {
    let last = num_list[num_list.length - 1];
    let secondLast = num_list[num_list.length - 2];
    let result = [...num_list];
    
    if (last > secondLast) {
        result.push(last - secondLast);
    } else {
        result.push(last * 2);
    }
    
    return result;
}