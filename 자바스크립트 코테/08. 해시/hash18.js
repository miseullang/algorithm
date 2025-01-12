/**
* arr=[1,2,3,4,8], target=6 -> return true
* arr=[2,3,5,9], target=10 -> return false
n 개의 양의 정수로 이루어진 리스트 arr 정수 target이 주어졌을 때 합이 target인 두 수가 arr에 있는지 찾고, 있으면 true, 없으면 false 반환시키기
* 
* 제약조건:
* - n은 2 이상 10,000 이하의 자연수
* - arr의 각 원소는 1 이상 10,000 이하의 자연수
* - arr의 원소 중 중복되는 원소는 없음
* - target은 1 이상 20,000 이하의 자연수
*/

// 의사코드
// 1. target = 현재 값(num) + 쌍이 되는 값(pair)
// 1-1. target - num 값이 배열에 있는지 확인
// => 배열을 순회하면서 탐색
// => 자기 자신은 빼고

function solution(arr, target) {
  const setArr = new Set(arr);

  for (let num of arr) {
    if (setArr.has(target - num) && (target - num) !== num) return true;
  }

  return false
}

// 테스트
console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false
