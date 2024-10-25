function solution(s, n) {
  return s.split("").map((val) => {
      if (val === " ") return " ";

       // 알파벳 ASCII 코드로 변환
      const char = val.charCodeAt(0);

      // 대문자인 경우 (A : 65 - Z : 90)
      if (char >= 65 && char <= 90) {
        // Z + 1 => A가 되야 하므로 90 + 1은 91이 아닌 65가 되어야 함
        // case Z : 90 - 65 +1 = 26이므로 26으로 나눈 나머지가 0 => 0 + 65 = A
        return String.fromCharCode(((char - 65 + n) % 26) + 65);
      }
      // 소문자인 경우 (a : 97 - z : 122)
      if (char >= 97 && char <= 122) {
        return String.fromCharCode(((char - 97 + n) % 26) + 97);
      }
    })
    .join("");
}