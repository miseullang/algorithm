function solution(n) {
   // 0. 기저 조건 설정(n이 1일 때, 2일 때)
   if (n === 1) return 1;
   if (n === 2) return 2;
   
   // 1. 배열의 길이가 n + 1인 배열 선언 (배열은 0부터이지만, 1부터 셀 것이므로)
   const arr = new Array(n + 1);
   
   // 3. 초깃값 지정 1칸 짜리일 때는 방법이 1, 2일 때는 2
   arr[1] = 1;
   arr[2] = 2;
   
   // 2. 멀리 뛰기 칸이 1일 때, 2일 때, ... n일 때의 방법의 수를 각각 모두 구하기
    // 4. 3부터 n까지 배열을 순회하면서 각 케이스의 방법의 수를 구하기
   for(let i = 3; i <= n; i++) {
       // 이전 두 값을 더한 후 1234567로 나눈 나머지를 저장 -> 오버플로우 방지
       arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
   }
   
   // 5. n번째 값을 리턴
   return arr[n];
}

// 문제 정의
// 멀리 뛰기 최대 칸 수 n이 주어짐 (= 주어진 배열의 길이)
// 한 번에 1칸을 뛰거나, 2칸을 뛸 수 있음
// n까지 도달하기 위해 뛸 수 있는 조합의 개수 구하기
// => 1칸씩만 뛰어서 도달 / 1 + 2의 조합 / 2칸씩만 뛰어서 도달
// 결국 마지막 칸 수가 1칸인지, 2칸인지에 따른 조합의 수를 각각 구하고, 더하면 됨

// 주어진 수가 4라면
// 1. 마지막 점프가 1칸인 경우
// 1-1. 3칸까지 온 상태에서 => 3칸까지 가는 방법의 수
// 2. 마지막 점프가 2칸인 경우
// 2-1. 2칸까지 온 상태에서 => 2칸까지 가는 방법의 수(2)
// => 즉, (3칸까지 가는 방법의 수) + (2칸까지 가는 방법의 수)

// 의사 코드
// 0. 기저 조건 설정(n이 1일 때, 2일 때)
// 1. 배열의 길이가 n + 1인 배열 선언 (배열은 0부터이지만, 1부터 셀 것이므로)
// 2. 멀리 뛰기 칸이 1일 때, 2일 때, ... n일 때의 방법의 수를 각각 모두 구하기
// 3. 초깃값 지정 1칸 짜리일 때는 방법이 1, 2일 때는 2
// 4. 3부터 n까지 배열을 순회하면서 각 케이스의 방법의 수를 구하기
// 5. n번째 값을 리턴
