function solution(array) {
  return array.reduce((acc, cur) => {
    return acc + [...String(cur)].filter((ch) => ch === '7').length;
  }, 0);
}