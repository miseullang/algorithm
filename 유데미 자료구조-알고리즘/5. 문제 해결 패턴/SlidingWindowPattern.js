// - **연속 부분 합의 최대값**

// 정수로 이루어진 배열과 숫자 n이 주어졌을 때,

// 배열에서 **연속된 n개의 요소의 합 중에서 가장 큰 값을 반환하는**

// maxSubarraySum 함수를 작성하세요.

// - **예시**

// ```jsx
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)  // 17
// maxSubarraySum([4, 2, 1, 6], 1)          // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4)       // 13
// maxSubarraySum([], 4)                   // null
// ```

// - 정답 - 시간 복잡도 **O(n)**

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
