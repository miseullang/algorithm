// **countUniqueValues**

// 정렬된 배열이 주어졌을 때, **배열 안에 존재하는 고유한 값의 개수를 세는** countUniqueValues 함수를 구현하세요.

// 배열에는 **음수도 포함될 수 있지만**, 배열은 항상 **정렬된 상태**로 주어진다고 가정합니다.

// - **예시**

// ```
// countUniqueValues([1, 1, 1, 1, 2])                        // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])    // 7
// countUniqueValues([])                                     // 0
// countUniqueValues([-2, -1, -1, 0, 1])                      // 4
// ```

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++; // 고유한 값이 생길 때마다 i를 한 칸 옮기고
      arr[i] = arr[j]; // 그 자리에 고유한 값을 복사
    }
  }

  return i + 1; // 인덱스이므로 +1
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
