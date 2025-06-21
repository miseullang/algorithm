// Sliding Window - minSubArrayLen
// 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
// 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.

// 예시:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// Time Complexity - O(n)

// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // 현재 total이 num보다 작고 end가 배열 끝이 아니면 → end++
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    }
    // total이 조건을 만족하면 → 최소 길이 저장하고, start++
    else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
    // end가 끝까지 갔는데도 total < num이면 → 종료
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
