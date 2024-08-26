function solution(cipher, code) {
    return cipher.split('').filter((el, index) => (index + 1) % code === 0).join('')
}