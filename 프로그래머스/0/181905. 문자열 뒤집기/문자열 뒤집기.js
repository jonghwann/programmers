function solution(my_string, s, e) {
    const str = my_string.substring(s, e + 1);
    const newStr = str.split('').reverse().join('');
    return my_string.replace(str, newStr);
}