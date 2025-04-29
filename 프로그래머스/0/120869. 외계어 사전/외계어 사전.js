function solution(spell, dic) {
    return dic.some(el => spell.sort().toString() == [...el].sort().toString()) ? 1 : 2;
}