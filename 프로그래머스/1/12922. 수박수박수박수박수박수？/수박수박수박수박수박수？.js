function solution(n) {
    var answer = '';
    
    for(i = 1; i < n+1; i++) {
        if ( i % 2 === 1) {
            answer += '수';
        } else {
            answer += '박';
        }
    }

    return answer;
}