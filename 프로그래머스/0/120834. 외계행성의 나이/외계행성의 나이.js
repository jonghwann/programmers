function solution(age) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    return String(age).split("").map(el => alphabet[Number(el)]).join("");
}