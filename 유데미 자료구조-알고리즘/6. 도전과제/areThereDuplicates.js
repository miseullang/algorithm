// 빈도수 세기 / 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
// 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// 예시:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// 제약 조건:
// Time - O(n)
// Space - O(n)

// 보너스:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  args.sort();

  let left = 0;
  let right = 1;

  while (right < args.length) {
    if (args[left] === args[right]) return true;
    left++;
    right++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
