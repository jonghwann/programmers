function solution(num_list) {
    let result = [0,0];
    
    for(let i of num_list) {
        result[i % 2] += 1
    }

    return result;
}