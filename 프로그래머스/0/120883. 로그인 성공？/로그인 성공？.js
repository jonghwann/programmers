function solution(id_pw, db) {
    for (let i of db) {
        if (i[0] === id_pw[0]) {
            if (i[1] === id_pw[1]) {
                return 'login';
            } else {
                return 'wrong pw';
            }
        }
    }
    return 'fail';
}