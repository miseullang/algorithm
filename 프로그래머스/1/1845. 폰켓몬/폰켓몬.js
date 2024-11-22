function solution(nums) {
    const unique = new Set(nums).size; // 중복 제거된 폰켓몬 종류 수
    
    return Math.min(nums.length / 2, unique);
}

// 문제 정의
// 폰켓몬은 중복이 존재
// 선택할 수 있는 최대 종류 수를 반환
// 1. 중복 제거
// 2. 최댓값 : nums.length / 2


// 의사 코드
// 1. 배열의 중복 제거 (Set 이용)
// 2. 선택 가능한 폰켓몬 수(N/2)와 중복 제거된 폰켓몬 종류 수 중 작은 값 반환