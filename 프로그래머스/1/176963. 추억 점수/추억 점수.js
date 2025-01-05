function solution(name, yearning, photo) {
  let answer = [];
  const dict = {};

  name.forEach((item, index) => {
    dict[item] = yearning[index];
  });

  photo.map((value) => {
    answer.push(
      value.reduce((acc, cur) => {
        return acc + (dict[cur] || 0);
      }, 0)
    );
  });

  return answer;
}

// 문제 정의
// 사진 속에 나오는 인물의 점수를 모두 합산한 값 = 해당 사진의 추억 점수
// name : 사람의 이름 배열
// yearning : 각 사람별 그리움 점수를 담은 정수 배열
// photo : 각 사진에 찍힌 사람의 이름 [[],[]]
// => 몇 장의 사진인가 / 각 사진에 든 사람이 이름이 무엇인가

// 의사 코드
// 1. 객체 생성
// 2. name 배열의 값을 객체의 Key로 할당
// 3. yearning 배열의 값을 객체의 value로 할당
// 4. photo 배열 내부의 각 배열의 값을 가지고 객체 순회 -> key로 value 꺼내 합산하기
// => map과 reduce 사용
