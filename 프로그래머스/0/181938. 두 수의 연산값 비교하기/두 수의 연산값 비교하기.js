function solution(a, b) {
    const concat = Number(String(a) + String(b));
    const product = 2 * a * b;
    return Math.max(concat, product);
}