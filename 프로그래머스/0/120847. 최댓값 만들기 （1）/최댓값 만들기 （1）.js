function solution(numbers) {
    const sorted = numbers.sort((a, b) => b - a);
    const answer = sorted[0] * sorted[1]
    return answer;
}