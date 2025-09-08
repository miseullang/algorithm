function solution(n, control) {
  const controlSet = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  return [...control].reduce((acc, cur) => {
    return acc + controlSet[cur];
  },n);
}