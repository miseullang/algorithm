function solution(arr) {
  return arr.reduce((answer, current, index) => {
    if (current !== arr[index - 1]) {
      answer.push(current);
    }
    return answer;
  }, []);
}