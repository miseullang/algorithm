// function solution(n) {
//     let count = 0;
    
//     for(let i = 1; i <= n; i++) {
//         let sum = 0;
//         let currentNum = i;
        
//         while(sum < n) {
//             sum += currentNum;
//             currentNum++;
//         }
        
//         if(sum === n) count++;
//     }
    
//     return count;
// }
// => 효율성 테스트 시간 초과

function solution(n) {
    let count = 0;
    
    // i는 연속된 수의 개수
    for(let i = 1; i <= Math.sqrt(2 * n); i++) {
        // 등차수열의 합 공식을 활용한 계산
        // n = x + (x+1) + (x+2) + ... + (x+k-1) 이라고 할 때
        // n = kx + k(k-1)/2 
        // x = (n - k(k-1)/2) / k
        let k = i;  // k는 연속된 수의 개수
        let temp = n - (k * (k-1) / 2);
        
        if(temp % k === 0 && temp / k > 0) {
            count++;
        }
    }
    
    return count;
}

// 문제 정의
// 주어진 수 n을 연속된 자연수의 합으로 표현할 수 있는 경우의 수 구하기
// 필요한 것
// 1. 경우의 수를 카운트할 변수 count
// 2. 연속된 수를 더할 변수 sum
// 3. 현재 더하는 수를 저장할 변수 currentNum

// 의사 코드
// 1. 1부터 n까지 반복하면서 시작값 정하기 (i)
// 2. 각 시작값마다 
// 2-1. sum이 n보다 작으면 currentNum을 더하고 currentNum 증가
// 2-2. sum이 n이랑 같으면 count 증가하고 다음 시작값으로
// 2-3. sum이 n보다 크면 다음 시작값으로
// 3. count 리턴