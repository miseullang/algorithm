// capitalizeWords
// capitalizeWords라는 재귀 함수를 작성하시오.
// 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.

function capitalizeWords(strArr) {
  const reseult = [];

  function helper(input) {
    if (input.length === 0) return;

    const capitalized = input[0].toUpperCase();

    reseult.push(capitalized);

    helper(input.slice(1));
  }
  helper(strArr);
  return reseult;
}

console.log(capitalizeWords(["car", "taco", "banana"]));
// ['CAR', 'TACO', 'BANANA']
console.log(capitalizeWords(["hello", "world"]));
// ['HELLO', 'WORLD']
console.log(capitalizeWords(["js", "is", "fun"]));
// ['JS', 'IS', 'FUN']
