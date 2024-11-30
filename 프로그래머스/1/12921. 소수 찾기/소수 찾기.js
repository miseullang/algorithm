// 에라토스테네스의 체를 이용한 풀이
function solution(n) {
    // 0부터 n까지의 숫자를 true로 초기화한 배열 생성
    const isPrime = new Array(n + 1).fill(true);
    
    // 0과 1은 소수가 아님
    isPrime[0] = isPrime[1] = false;
    
    // 에라토스테네스의 체 적용
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            // i의 배수들을 모두 제거
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // true로 남아있는 수의 개수가 소수의 개수
    return isPrime.filter(Boolean).length;
}

// function solution(n) {
//     // 2는 이미 카운트했으므로 answer = 1로 시작
//     let answer = 1;
    
//     // 3부터 n까지 홀수만 검사
//     for (let i = 3; i <= n; i += 2) {
//         let isPrime = true;
        
//         // 소수 판별: i를 2부터 sqrt(i)까지의 수로 나눠봄
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
        
//         if (isPrime) answer++;
//     }
    
//     return answer;
// }
// => 효율성 테스트 통과 못함 ㅠㅠ

// 조건 정리
// 3 - n까지 배열 만들기
// 각 값에 대해 2부터 해당 값까지 순회하면서 소수 검사
// 이중 for문 => 제곱근으로 검사 범위 좁히기
// 소수는 홀수 => 홀수 케이스만 검사하면 됨
// => 1, 2에 대한 소수 검사는 필요 없음
// 1은 소수 아님, 2는 소수
// 소수 : (x % 1 === 0 && x % x === 0)
