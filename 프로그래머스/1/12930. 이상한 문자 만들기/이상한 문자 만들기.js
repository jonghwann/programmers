function solution(s) {
    return s.split(" ").map((i => i.split("").map((j, i) => i % 2 === 0 ? j.toUpperCase() : j.toLowerCase()))).join(" ").replace(/,/g, "");
}