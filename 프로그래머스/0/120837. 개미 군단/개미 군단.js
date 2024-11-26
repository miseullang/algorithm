function solution(hp) {
    let answer = 0;
    
    answer += Math.floor(hp / 5);
    hp = hp % 5;
    
    answer += Math.floor(hp / 3);
    hp = hp % 3;
    
    answer += hp;
    
    return answer;
}

// 장군개미 : 5
// 병정개미 : 3
// 일개미 : 1

// hp를 장군개미로 나눈 나머지가 0이 아니면 -> 병정개미로 나누기 -> 일개미로 나누기