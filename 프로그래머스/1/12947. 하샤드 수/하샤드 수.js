function solution(x) {
    let sum = String(x).split('').reduce((a, b) => a + parseInt(b), 0);
    return x % sum === 0;
}