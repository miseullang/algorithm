function solution(n) {
  const answer = new Set();
  let divisor = 2;
  
  while (n > 1) {
    if (n % divisor === 0) {
      answer.add(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  
  return Array.from(answer).sort((a, b) => a - b);
}