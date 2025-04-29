function solution(spell, dic) {
    return dic.some(w => [...w].sort().join('') === spell.sort().join('')) ? 1 : 2;
}