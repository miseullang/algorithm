// ✅ 문제
// - strings의 길이는 1 이상 10,000 이하
// - s는 알파벳 소문자로 이루어짐
// 입출력 예
// | s | result |
// | --- | --- |
// | "hello" | "ehllo" |
// | "algorithm" | "ghlimort" |

function solution(s) {
  const ALPHABET_SIZE = 26;
  const counts = Array(ALPHABET_SIZE).fill(0);

  for (const char of s) {
    counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  let sortedStr = "";
  for (let i = 0; i < ALPHABET_SIZE; i++) {
    sortedStr += String.fromCharCode(i + "a".charCodeAt(0)).repeat(counts[i]);
  }

  return sortedStr;
}

// 테스트 케이스
console.log(solution("hello"));        // "ehllo"
console.log(solution("algorithm"));    // "aghilmort" 
console.log(solution("a"));            // "a"
console.log(solution("dcba"));         // "abcd"
console.log(solution("programming"));  // "aggimmnoorpr"
