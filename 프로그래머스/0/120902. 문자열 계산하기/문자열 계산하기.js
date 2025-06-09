function solution(my_string) {
  const tokens = my_string.split(' ');
  let result = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const value = Number(tokens[i + 1]);

    if (operator === '+') {
      result += value;
    } else if (operator === '-') {
      result -= value;
    }
  }

  return result;
}