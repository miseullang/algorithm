function solution(n) {
    // 제곱근 구하기
    const sqrt = Math.sqrt(n);
    
    // 제곱근이 정수인지 확인
    return Number.isInteger(sqrt) ? 1 : 2;
}