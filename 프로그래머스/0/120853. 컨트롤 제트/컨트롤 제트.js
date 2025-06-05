function solution(s) {
  const tokens = s.split(' ');
  const stack = [];

  for (let token of tokens) {
    if (token === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(token));
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}