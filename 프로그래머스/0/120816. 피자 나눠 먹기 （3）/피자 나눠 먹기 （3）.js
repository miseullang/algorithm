function solution(slice, n) {
    var answer = 0;
    return n % slice === 0 ? Math.floor(n / slice) : Math.floor(n / slice) + 1;
}

// slice : 피자 조각 수 
// n : 피자 먹는 사람 수
// 인당 최소 1조각 이상

// 나머지로 나누어 떨어지면 나눈 몫 반환
// 나눠 떨어지지 않으면 몫 + 1