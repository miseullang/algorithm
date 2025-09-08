function solution(numLog) {
  const controls = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
  };

  let answer = "";

  for(let i = 1; i < numLog.length; i++) {
    let diff = numLog[i] - numLog[i-1];
    answer += controls[diff];
  }

  return answer;
}
