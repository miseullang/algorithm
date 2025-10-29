function solution(survey, choices) {
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const scoreMap = [3, 2, 1, 0, 1, 2, 3];
  const indicators = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  // survey 타입 확인
  // choices[i]일 때 i가 score 인덱스의 0~2 구간이면 -> survey 타입의 첫 글자에 + 해당 점수
  // 인덱스의 3과 같으면 그 점수 그대로
  // 4~끝까지 -> survey 타입의 마지막 글자에 + 해당 점수
  // survey 타입 순회 종료시 scores를 indicators별로 점수 비교 계산
  // 더 높은 값을 가진 글자 추가
  // 리턴

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split("");
    const choice = choices[i];

    if (choice < 4) {
      scores[disagree] += scoreMap[choice - 1];
    } else if (choice > 4) {
      scores[agree] += scoreMap[choice - 1];
    }
  }

  let result = "";
  for (const [a, b] of indicators) {
    if (scores[a] === scores[b]) {
      result += a < b ? a : b;
    } else {
      result += scores[a] > scores[b] ? a : b;
    }
  }

  return result;
}
