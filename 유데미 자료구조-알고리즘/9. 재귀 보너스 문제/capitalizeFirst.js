// capitalizeFirst
// capitalizeFirst라는 재귀 함수를 작성하시오.
// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

function capitalizeFirst(str) {
  // add whatever parameters you deem necessary - good luck!
  const result = [];

  function helper(input) {
    if (input.length === 0) return;

    const word = input[0];
    const capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);

    helper(input.slice(1));
  }

  helper(str);
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
