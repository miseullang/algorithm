function solution(k, score) {
  const answer = [];
  const winners = [];
  for (i = 0; score.length > i; i++) {
    // 1. 매일 방송 점수 하나를 명예의 전당 배열에 넣기
    winners.push(score[i]);

    // 2. 최하위 점수 구하기 (점수 높은 -> 낮은 순으로 정렬 후 마지막 점수)
    winners.sort((a, b) => b - a);

    // 3. 명예의 전당 길이 제한 = k
    // ** 정렬 후 pop해야 함 **
    if (winners.length > k) {
      winners.pop();
    }

    // 명예의 전당 배열의 마지막 값을 answer 배열에 넣기
    answer.push(winners[winners.length - 1]);
  }
  return answer;
}

// 요구 사항
// return : 명예의 전당에 있는 점수 중 최하위 점수 배열
// 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

// 1. 점수 목록의 길이 = 명예의 전당 크기(k)
// 2. answer 길이 = score.length(전체 방송 일수)
// 3. 전체 방송 일자를 순회
// 3-1. 각 방송일마다 배열의 가장 최하위 값을 answer에 입력
// * 명예의 전당 정렬 => 최고점 -> 최하점 *
