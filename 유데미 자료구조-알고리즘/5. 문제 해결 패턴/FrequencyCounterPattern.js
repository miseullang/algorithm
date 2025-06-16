// **애너그램(Anagram)**

// 두 개의 문자열이 주어졌을 때, **두 번째 문자열이 첫 번째 문자열의 애너그램인지 판별하는 함수**를 작성하세요.

// **애너그램**이란, 단어의 철자를 재배열해서 만든 다른 단어나 구를 의미합니다.

// 예를 들어, cinema는 iceman의 에너그램입니다.

// - 예시

// ```jsx
// validAnagram('', '')                         // true
// validAnagram('aaz', 'zza')                   // false
// validAnagram('anagram', 'nagaram')           // true
// validAnagram('rat', 'car')                   // false
// validAnagram('awesome', 'awesom')            // false
// validAnagram('qwerty', 'qeywrt')             // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// ```;

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
