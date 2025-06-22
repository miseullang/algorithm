// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

function recursiveRange(num) {
  if (num < 1) return 0;

  return num + recursiveRange(num - 1);
}
