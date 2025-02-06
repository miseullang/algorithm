function solution(want, number, discount) {
    var answer = 0;
    
    // 원하는 제품과 수량을 Map으로 저장
    const wantMap = new Map();
    want.forEach((item, index) => {
        wantMap.set(item, number[index]);
    });
    
    // 10일 연속으로 할인하는 경우를 체크
    for (let i = 0; i <= discount.length - 10; i++) {
        const tempMap = new Map(wantMap);
        let isPossible = true;
        
        // 10일간의 할인 품목 확인
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            if (!tempMap.has(item)) {
                isPossible = false;
                break;
            }
            
            const count = tempMap.get(item) - 1;
            if (count < 0) {
                isPossible = false;
                break;
            }
            tempMap.set(item, count);
        }
        
        // 모든 제품을 원하는 수량만큼 구매할 수 있는지 확인
        if (isPossible) {
            let allZero = true;
            for (let count of tempMap.values()) {
                if (count !== 0) {
                    allZero = false;
                    break;
                }
            }
            if (allZero) answer++;
        }
    }
    
    return answer;
}