function solution(n, k) {
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    const answer = numbers.filter(num => num % k === 0);
    return answer;
}