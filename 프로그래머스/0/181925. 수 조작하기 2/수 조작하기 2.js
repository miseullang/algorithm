function solution(numLog) {
  const controls = {
    '1': 'w',
    '-1': 's',
    '10': 'd',
    '-10': 'a',
  };

  return numLog.reduce((acc, cur, index) => {
    if (index === 0) return acc;
    let diff = cur - numLog[index - 1];
    return acc + controls[diff];
  }, "");
}