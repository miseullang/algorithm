function solution(k, tangerine) {
    const dict = {};
    tangerine.forEach(value => {
        dict[value] = (dict[value] || 0) + 1;
    });
    
    const sorted = Object.values(dict).sort((a, b) => b - a);
    
    let sum = 0;
    let answer = 0;
    
    for(let count of sorted) {
        answer++;
        sum += count;
        if(sum >= k) break;
    }
    
    return answer;
}

// 문제 정의
// 귤을 크기별로 분류
// 귤 k개를 고를 때 크기별 종류의 최솟값

// 의사 코드
// tangerine 배열의 값을 키로 갖는 객체 dict 구현
// dict의 value들만 배열로 만들어서 내림차순 정렬 
// 정렬된 배열을 순회하면서 k개를 채우는데 필요한 종류 개수 세기