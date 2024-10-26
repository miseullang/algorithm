function solution(num) {
  let number = num;
  let answer = 0;

  while (number !== 1) {
    number = number % 2 === 0 ? number / 2 : number * 3 + 1;
    answer++;

    if (answer >= 500) {
      return -1;
    }
  }

  return answer;
}