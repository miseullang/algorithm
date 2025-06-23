// flatten
// 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!Array.isArray(arr)) return [arr];

  let result = [];

  for (let val of arr) {
    if (Array.isArray) {
      result = [...result, ...flatten(val)];
    } else {
      result.push(val);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
