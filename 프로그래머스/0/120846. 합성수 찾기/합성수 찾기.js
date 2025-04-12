function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i++) {
        let divisorCount = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisorCount++;
            }
        }
        
        if (divisorCount >= 3) {
            answer++;
        }
    }
    
    return answer;
}