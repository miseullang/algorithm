function solution(k, tangerine) {
    let sizeFilter = {};
    
    for (let gyul of tangerine) {
        sizeFilter[gyul] = (sizeFilter[gyul] || 0) + 1;
    }
    
    const counts = Object.values(sizeFilter).sort((a, b) => b - a);
    
    let answer = 0; // 종류의 수
    for (let count of counts) {
        k -= count;
        answer++;
        if (k <= 0) return answer;
    }

    return answer;
}