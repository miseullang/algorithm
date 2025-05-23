function solution(numbers) {

    // 배열 정렬 (오름차순)
    numbers.sort((a, b) => a - b);
    
    const length = numbers.length;

    const maxProduct1 = numbers[length - 1] * numbers[length - 2];
    const maxProduct2 = numbers[0] * numbers[1];
    
    return Math.max(maxProduct1, maxProduct2);
}