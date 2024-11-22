function solution(cards1, cards2, goal) {
    let cardindex1 = 0;
    let cardindex2 = 0;
    
    for (let value of goal) {
        if (value === cards1[cardindex1]) {
            cardindex1++;
        } else if (value === cards2[cardindex2]) {
            cardindex2++;
        } else {
            return "No";
        }
    }
    return "Yes";
}

// 문제 정의
// cards1[], cards2[]에서 값을 추출하면서 answer 배열 만들기
// => 같은 배열 내에서 연달아 추출해도 됨
// answer === goal 불린 값에 따라 결과 출력

// 의사 코드
// cards1[i], cards2[i]와 goal[i]를 비교해서 같은 게 있으면 추출
// => 
// answer === goal => "Yes"
// 같은 게 없으면 로직을 중단하고 answer에 "No" 저장