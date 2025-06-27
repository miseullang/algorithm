// collectStrings
// 객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는
// collectStrings라는 함수를 작성합니다.

function collectStrings(obj) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(collectStrings(obj[key]));
    }
  }

  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"]
