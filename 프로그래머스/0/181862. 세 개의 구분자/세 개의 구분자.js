function solution(myStr) {
    return /^[abc]+$/.test(myStr) ? ['EMPTY'] : myStr.split(/[abc]/).filter(Boolean);
}