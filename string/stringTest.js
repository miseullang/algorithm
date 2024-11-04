// 문자 내장 객체 / 연습문제
// Q1.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.length);

// Q2.
// const str = "JavaScript";
// // 여기에 코드를 작성하세요
// console.log(str[0]);

// Q3.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.indexOf('o'));

// Q4.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.slice(6, -1));

// Q5.
// const str = "hello";
// // 여기에 코드를 작성하세요
// console.log(str.toLocaleUpperCase());

// Q6.
// const str = "   Hello, World!   ";
// // 여기에 코드를 작성하세요
// console.log(str.trim());

// Q7.
// const str = "apple,banana,cherry";
// // 여기에 코드를 작성하세요
// console.log(str.split(","));

// Q8.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.replaceAll("World", "JavaScript"));

// Q9.
// const str = "I love JavaScript";
// // 여기에 코드를 작성하세요
// console.log(str.includes('Java'));

// Q10.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.startsWith("Hello"));

// Q11.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요
// console.log(str.endsWith("!"));

// Q12.
// const str = "Hello";
// // 여기에 코드를 작성하세요
// console.log(str.repeat(3));

// Q13.
// const str = "The rain in Spain stays mainly in the plain.";
// // 여기에 코드를 작성하세요
// console.log(str.match(/ain/g));

// Q14.
// const str = "The quick brown fox jumps over the lazy dog.";
// // 여기에 코드를 작성하세요
// console.log(str.indexOf("fox"));

// Q15.
// const str = "5";
// // 여기에 코드를 작성하세요
// console.log(str.padStart(2,"0"));

// Q16.
// const str = "5";
// // 여기에 코드를 작성하세요
// console.log(str.padEnd(2,"0"));

// Q17.
// const str = "istanbul";
// // 여기에 코드를 작성하세요
// console.log(str.toLocaleUpperCase('tr-TR'));

// Q18.
// const str = new String("Hello, World!");
// // 여기에 코드를 작성하세요
// console.log(str.valueOf());

// Q19.
// const str = "banana";
// // 출력결과 : ban
// let result = "";

// for (let char of str) {
//   if (!result.includes(char)) {
//     result += char;
//   }
// }
// console.log(result);

// Q20.
// const str = "Hello, World!";
// // 여기에 코드를 작성하세요

// // 1. 문자열을 글자 단위로 쪼개기
// // 2. 아스키 코드 값으로 대소문자를 판별해서 대문자는 toLowerCase, 소문자는 toUpperCase 적용
// // 3. 합치기
// const result = str.split('').map(char => {
//   const ascii = char.charCodeAt(0);

//   if (ascii >= 65 && ascii <= 90) {
//     return char.toLowerCase();
//   } else if (ascii >= 97 && ascii <= 122) {
//     return char.toUpperCase();
//   } else {
//     return char;
//   }
// }).join('');

// console.log(result);

// Q21.
// const str = "banana";
// // 여기에 코드를 작성하세요
// console.log(str.match(/a/g).length);

// Q22.
// const words = ["Hello", "world!"];
// // 여기에 코드를 작성하세요
// console.log(words.join(" "));

// Q23.
// const str1 = "Hello";
// const str2 = "hello";
// // 여기에 코드를 작성하세요
// console.log(str1.toLocaleLowerCase() === str2);
