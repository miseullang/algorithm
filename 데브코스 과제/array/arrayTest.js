// 배열 내장 객체 / 연습문제

const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 14, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// // 1. 키가 185인 학생 1명 찾기
// const result1 = students.find((student) => student.height === 185);
// console.log(result1);

// //2. 나이가 20살 이상인 학생들 찾기
// const result2 = students.filter((student) => student.age >= 20);
// console.log(result2);

// //3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
// const result3 = students.some((student) => student.height <= 165);
// console.log(result3);

// //4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
// const result4 = students.every((student) => student.age >= 10);
// console.log(result4);

// //5. 학생들의 평균 연령 구하기
// const result5 = students.reduce((sum, student) => sum + student.age, 0) / students.length;
// console.log(result5);

//6. 남학생들의 평균 연령 구하기
// 남학생만 필터링
// 연령만 필터링
// 평균 구한 뒤 리턴
{const male = students.filter((student) => student.gender === "male");
const result6 = male.map((student) => student.age).reduce((acc, age) => acc + age, 0) / male.length;
console.log(result6);}

// //7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기
{const result7 = students.filter((student) => student.gender === 'female').map((student) => student.name);
console.log(result7);}

// //8. 여학생들 중 나이가 가장 어린 학생 찾기
// // 여학생 필터링
// // 나이를 기준으로 오름차순 정렬 => sort 사용, age 비교
// const result8 = students.filter((student) => student.gender === "female")
//   .sort((a, b) => a.age - b.age)[0];
// console.log(result8);
