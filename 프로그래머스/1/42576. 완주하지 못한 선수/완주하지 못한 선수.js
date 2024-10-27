// [ 조건 ]
// 완주를 못한 선수가 몇 명인지 X, 누구인지 O => 배열의 '값'을 리턴
// 선수 이름은 중복될 수 있다

// 1. 참여 명단 participant를 객체로 만든다
// => 중복값이 있으면 해당 키의 값을 + 1
// 2. 만들어진 객체의 키와 완주자 명단 completion의 값을 비교
// 2-1. 일치하는 키가 있으면 배열에서 제거하고 객체의 값을 -1
// 3. 1 객체의 프로퍼티 중 값이 0이 아닌 키를 answer로 반환

function solution(participant, completion) {
  const participantObj = {};

  for (let i = 0; i < participant.length; i++) {
    participantObj[participant[i]] = participantObj[participant[i]] ? participantObj[participant[i]] + 1 : 1;
  }

  for (let i = 0; i < completion.length; i++) {
    participantObj[completion[i]] = participantObj[completion[i]] - 1;
  }

  for (let key in participantObj) {
    if (participantObj[key] > 0) {
      return key;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
)); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"
