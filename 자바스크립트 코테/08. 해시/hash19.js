// # 문제 19: 문자열 해싱을 이용한 검색 함수 만들기 ★★

// **제한 시간**: 40분
// **관련 시간 복잡도**: O(N+K)
// **출처**: 저자 출제
// **문제 URL**: https://github.com/kciter/coding-interview-js/blob/main/solution/19.js

// ## 문제 설명
// 문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다.
//  문자열이 있으면 true, 없으면 false가 됩니다. 각 문자열에 대해서 문자열의 전체 여부를 리스트 형태로 반환하는 solution() 함수를 작성해주세요.

// ## 제약 조건
// - 입력 문자열은 영어 소문자로만 이루어져 있습니다.
// - 문자열의 최대 길이는 10^5입니다.
// - 해시 충돌은 없습니다.
// - 아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하세요.
// - 다음 식에서 p는 31, m은 1,000,000,007로 합니다.
//   - hash(s) = (s[0] + s[1]*p + s[2]*p² + ...... s[n-1]*p^(n-1)) mod m

// ## 입출력의 예
// | stringList | queryList | return |
// |------------|-----------|---------|
// | ["apple", "banana", "cherry"] | ["banana", "kiwi", "melon", "apple"] | [true, false, false, True] |

// 의사코드
// 문자열 해싱 함수 구현
// - 아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하세요.
// - 다음 식에서 p는 31, m은 1,000,000,007로 합니다.
//   - hash(s) = (s[0] + s[1]*p + s[2]*p² + ...... s[n-1]*p^(n-1)) mod m

// function hashFunc(strArr) {
//   const p = 31;
//   const m = 1000000007;

// }

// 해싱 함수 구현을 못 하겠어요,,,

function solution(stringList, queryList) {
  const setStrList = new Set(stringList);

  const result = [];

  for (let query of queryList) {
    result.push(setStrList.has(query));
  }

  return result;
}

// 테스트 케이스
console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [true, false, false, true]
console.log(solution(["hello", "world"], ["hello", "world", "test"])); // [true, true, false]
console.log(solution(["cat", "dog"], ["cat"])); // [true]
