function solution(myString) {
    return myString.split('x').filter(el => el && el).sort((a, b) => a.localeCompare(b));
}