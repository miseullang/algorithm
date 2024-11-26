function solution(my_string, n) {
    return [...my_string].map(element => element.repeat(n)).join('');
}