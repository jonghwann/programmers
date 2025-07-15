function solution(s){
    const str = s.toLowerCase();
    const p = str.split('p').length - 1;
    const y = str.split('y').length - 1;
    
    return p === y || !p && !y ? true : false;
}