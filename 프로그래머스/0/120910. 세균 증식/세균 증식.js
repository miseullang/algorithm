function solution(n, t) {
    let result = n;
    
    for (i = 0; i < t; i++) {
        result = result * 2;
    }
    return result;
}