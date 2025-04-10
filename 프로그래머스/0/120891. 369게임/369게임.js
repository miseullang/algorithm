function solution(order) {
    return String(order)
        .split('')
        .filter(digit => ['3', '6', '9'].includes(digit))
        .length;
}