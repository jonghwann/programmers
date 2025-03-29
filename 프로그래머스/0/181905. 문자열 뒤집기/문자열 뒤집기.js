function solution(my_string, s, e) {
    let str = my_string.substring(s, e + 1);
    
    return my_string.replace(str, 'null').replace('null', str.split('').reverse().join(''));
}