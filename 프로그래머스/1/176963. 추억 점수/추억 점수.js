function solution(name, yearning, photo) {
    return photo.map((el)=> el.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0));
}