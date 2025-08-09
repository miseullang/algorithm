function factorialBig(n) {
  let res = 1n;
  for (let i = 2n; i <= n; i++) {
    res *= i;
  }
  return res;
}

function solution(balls, share) {
  return Number(
    factorialBig(BigInt(balls)) /
    (factorialBig(BigInt(balls - share)) * factorialBig(BigInt(share)))
  );
}