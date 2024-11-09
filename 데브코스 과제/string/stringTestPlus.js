// ### 1. Palindrome Checker
// **문제 설명**: 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.

// const str = "A man a plan a canal Panama";
// // 여기에 코드를 작성하세요
// const cleanedStr = str.replace(/ /g, "").toLowerCase();
// const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");
// console.log(isPalindrome);

// ---

// ### 2. Vowel Counter
// **문제 설명**: 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.

// const str = "JavaScript is awesome!";
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// const counter = () => {
//   let count = 0;
//   for (const char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(counter());

// ---

// ### 3. Anagram Checker
// **문제 설명**: 두 문자열이 애너그램인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 비교해야 합니다.
// 1. 모두 소문자로 대치
// 2. 공백 제거
// 3. 문자열 길이 비교
// 4. sort로 정렬 후 일치하는지 확인

// const str1 = "listen";
// const str2 = "silent";
// // // 여기에 코드를 작성하세요

// const isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const string1 = str1.replace(/\s+/g, "").toLowerCase().split('').sort().join('');
//   const string2 = str2.replace(/\s+/g, "").toLowerCase().split('').sort().join('');

//   return string1 === string2;
// }

// ---

// ### 4. Word Frequency Counter
// **문제 설명**: 주어진 문자열에서 각 단어의 빈도를 세어 객체로 반환하세요.

// 단어의 빈도 => 공백으로 나눠서 단어 분리 (split)
// 문장을 순회하면서 단어를 키로 해서 카운트 => 객체 생성

// const str = "hello world hello";

// const string = str.toLowerCase().split(" ");
// const result = {};

// for (word of str) {
//   result[word] = (result[word] || 0) + 1;
// }

// console.log(result);

// ---

// ### 5. Capitalize Each Word
// **문제 설명**: 문자열의 각 단어의 첫 글자를 대문자로 변환하세요.

// const str = "hello world";
// const words = str.split(" ");
// const result = (words) => {
//   return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// };

// console.log(result(words)); // "Hello World"

// ---

// ### 6. Remove Duplicates
// **문제 설명**: 문자열에서 중복된 문자를 제거한 새로운 문자열을 만드세요.

// **기본 제공 코드**:

// const str = "banana";
// // 여기에 코드를 작성하세요
// let result = "";
// for (char of str) {
//   if (!result.includes(char)) {
//     result += char;
//   }
// }
// console.log(result);

// ---

// ### 7. Longest Word Finder

// **문제 설명**: 주어진 문자열에서 가장 긴 단어를 찾으세요.

// **기본 제공 코드**:

// const str = "The quick brown fox";
// // 여기에 코드를 작성하세요
// let result = '';
// const words = str.split(" ");
// words.forEach((word) => {
//   result = result.length < word.length ? word : result;
// });
// console.log(result);

// ---

// ### 8. String Compression
// **문제 설명**: 문자열을 압축하세요. 같은 문자가 연속으로 나타날 경우 문자의 개수와 함께 나타내세요. 예) "aaabb" → "a3b2".

// for - of문 사용
// result 변수에 답을 기록하고 리턴(알파벳 + 카운트)
// 각 알파벳의 변수를 세는 count 변수 사용

// const str = "aaabbcaaa";
// // 여기에 코드를 작성하세요
// let result = '';
// let count = 1;
// let prev = str[0];

// for (char of str) {
//   if (prev === char) {
//     count++;
//   } else {
//     result += prev + count;
//     prev = char;
//     count = 1;
//   }
// }
// result += prev + count;
// console.log(result);

// ---

// ### 9. Reverse Words
// **문제 설명**: 문자열의 각 단어를 반대로 뒤집으세요. 예) "hello world" → "olleh dlrow".

// const str = "hello world";
// // 여기에 코드를 작성하세요
// const result = str.split(' ').reverse().join(' ').split('').reverse().join('');
// console.log(result);

// ---

// ### 10. Replace Vowels
// **문제 설명**: 문자열의 모든 모음을 '#'으로 교체하세요.

// const str = "hello world";
// // 여기에 코드를 작성하세요
// const vowels = ["a", "e", "i", "o", "u"];
// let result = str;

// vowels.forEach((vowel) => {
//   result = result.split(vowel).join("#");
// });
// console.log(result); // "h#ll# w#rld"

// 가장 효율적인 방법 : const result = str.replace(/[aeiou]/g, '#');

// ---

// ### 11. Count Consonants
// **문제 설명**: 주어진 문자열에서 자음의 개수를 세세요.

// const str = "hello world";
// // 여기에 코드를 작성하세요
// const vowels = ["a", "e", "i", "o", "u"];
// const cleanStr = str.split(' ').join('').split('');
// let count = 0;

// cleanStr.forEach(char => !vowels.includes(char) && count++);

// console.log(count);

// ---

// ### 12. Substring Occurrences
// **문제 설명**: 주어진 문자열에서 특정 부분 문자열(an)이 몇 번 나타나는지 세세요.
// **찾을 문자** : an

// const str = "banana";
// // 여기에 코드를 작성하세요
// let count = 0;
// let result = str.split('an').length - 1;
// console.log(result);

// ---

// ### 13. Remove Special Characters
// **문제 설명**: 문자열에서 특수 문자를 제거하세요.

// **기본 제공 코드**:

// const str = "Hello@World!";
// // 여기에 코드를 작성하세요
// const result = str.replace(/[^A-Za-z0-9\s]/g, '');
// console.log(result); // Hello World

// ---

// ### 14. String Rotation

// **문제 설명**: 두 문자열이 회전 문자열인지 확인하세요. 예) "abc"와 "cab".

// **기본 제공 코드**:
// const str1 = "abc";
// const str2 = "cab";
// const result = (str1 + str1).includes(str2);
// console.log(result);

// ---

// ### 15. String Interleaving
// **문제 설명**: 두 문자열이 교차하여 결합된 형태인지 확인하세요. 예) "abc"와 "abdc" → true.

// **기본 제공 코드**:

// const str1 = "abc";
// const str2 = "abdc";
// // 여기에 코드를 작성하세요

// function crossCheck(string1, string2) {
//   let result1 = true;

//   string1.split("").forEach((char) => {
//     if (!string2.includes(char)) {
//       result1 = false;
//     }
//   });

//   let result2 = true;

//   string2.split("").forEach((char) => {
//     if (!string1.includes(char)) {
//       result2 = false;
//     }
//   });

//   return result1 || result2;
// }

// console.log(crossCheck(str1, str2));

// ---

// ### 16. Longest Palindromic Substring
// **문제 설명**: 주어진 문자열에서 가장 긴 회문 부분 문자열을 찾으세요.

// **기본 제공 코드**:

// const str = "babad";
// 여기에 코드를 작성하세요

// *** 우와 전혀 모르겠다 ***

// ---

// ### 17. Swap Case

// **문제 설명**: 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.

// **기본 제공 코드**:

// const str = "Hello World!";
// // 여기에 코드를 작성하세요

// const result = str.split("").map((char) => {
//     return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//   })
//   .join("");
// console.log(result); // "hELLO wORLD!"

// 더 간단한 방법
// const str = "Hello World!";
// const result = str
//     .replace(/[a-z]/g, char => char.toUpperCase())
//     .replace(/[A-Z]/g, char => char.toLowerCase());
// console.log(result);  // "hELLO wORLD!"

// ---

// ### 18. Sentence Reverse
// **문제 설명**: 문자열의 각 문장을 반대로 뒤집고, 문장의 순서도 반대로 하세요.

// **기본 제공 코드**:

// const str = "Hello. How are you?";
// // 여기에 코드를 작성하세요(
// const result = str.split('').reverse('').join('').split(' ').reverse().join('');
// console.log(result)

// ---

// ### 19. Convert to Title Case

// **문제 설명**: 주어진 문자열을 제목 형식으로 변환하세요. 각 단어의 첫 글자는 대문자로, 나머지는 소문자로 해야 합니다.

// **기본 제공 코드**:

// const str = "tHIS Is a tItLE";
// // 여기에 코드를 작성하세요
// const result = str.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// console.log(result);

// ---

// ### 20. Create Acronym
// **문제 설명**: 주어진 문자열에서 각 단어의 첫 글자를 따서 약어를 만드세요.

// **기본 제공 코드**:

// const str = "For your information";
// // 여기에 코드를 작성하세요
// const result = str.split(' ').map(word => word[0].toUpperCase()).join('.');
// console.log(result)

// ---

// ### 21. Validate Email Format
// **문제 설명**: 주어진 문자열이 유효한 이메일 주소 형식인지 확인하세요.

// **기본 제공 코드**:

// const email = "example@test.com";
// // 여기에 코드를 작성하세요
// const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// console.log(isValid);

// ---

// ### 22. Find Missing Letters
// **문제 설명**: 주어진 문자열에서 누락된 알파벳 문자를 찾아 배열로 반환하세요.

// **기본 제공 코드**:

// const str = "abcdegh";
// // 여기에 코드를 작성하세요
// const result = [];

// // 문자열의 각 문자를 순회 (마지막 문자 전까지)
// for (let i = 0; i < str.length - 1; i++) {
//   // 현재 문자의 ASCII 코드
//   const current = str.charCodeAt(i);
//   // 다음 문자의 ASCII 코드
//   const next = str.charCodeAt(i + 1);

//   // 두 문자의 ASCII 코드 차이가 1보다 크면 중간에 누락된 문자가 있다는 뜻
//   if (next - current > 1) {
//     // 현재 문자 코드의 다음 값부터 다음 문자 코드 전까지 순회
//     for (let j = current + 1; j < next; j++) {
//       // ASCII 코드를 문자로 변환해서 결과 배열에 추가
//       result.push(String.fromCharCode(j));
//     }
//   }
// }

// console.log(result);

// ---

// ### 23. Sort Characters
// **문제 설명**: 주어진 문자열의 문자를 알파벳 순서로 정렬하여 새로운 문자열을 만드세요.

// **기본 제공 코드**:

const str = "banana";
// 여기에 코드를 작성하세요
const result = str.split("").sort().join("");
console.log(result);