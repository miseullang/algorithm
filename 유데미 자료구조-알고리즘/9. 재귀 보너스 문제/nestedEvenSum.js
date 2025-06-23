// nestedEvenSum
// nestedEvenSum이라는 재귀 함수를 작성하시오.
// 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.

function nestedEvenSum () {
  // add whatever parameters you deem necessary - good luck!
   let sum = 0;

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      sum += nestedEvenSum(value);
    }

    else if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10