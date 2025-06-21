// 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

// Time: O(N)

// 예시 인풋:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const countNum1 = {};
  const countNum2 = {};

  for (let n of str1) {
    countNum1[n] = (countNum1[n] || 0) + 1;
  }

  for (let n of str2) {
    countNum2[n] = (countNum2[n] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
