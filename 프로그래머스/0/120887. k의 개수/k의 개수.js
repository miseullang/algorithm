function solution(i, j, k) {
    let answer = 0;
    
    for (let num = i; num <= j; num++) {
        let numStr = num.toString();
        for (let digit of numStr) {
            if (digit === k.toString()) {
                answer++;
            }
        }
    }
    
    return answer;
}