function solution(babbling) {
    const pronounceables = ["aya", "ye", "woo", "ma"];
    
    return babbling.filter(element => {
        // 2-1. 같은 발음이 연속되는 경우를 체크해서 열외시키기
        for(let speak of pronounceables) {
            if(element.includes(speak + speak)) {
                return false;
            }
        }
        
        // 2-2. 각 단어별로 발음 불가능한 단어를 공백으로 만들기
        let word = element;
        for(let speak of pronounceables) {
            word = word.replaceAll(speak, " ");
        }
        
        return word.trim().length === 0;
    }).length;
}

// 문제 정의
// babbling 배열에서 조카가 발음할 수 있는 단어의 개수 리턴하기
// 발음 가능한 문자 : "aya", "ye", "woo", "ma"만 가능
// => 가능 : 발음 가능한 문자끼리의 조합
// => 불가능 : 발음 가능한 문자를 포함한 다른 문자, 발음 가능한 문자의 연속

// 의사코드
// 1. 발음 가능한 문자열 pronounceable 정의
// 2. babbling 배열을 원소별로 순회
// => pronounceable의 원소끼리의 조합이거나, 단일 원소인 경우에만 카운트
// 2-1. 같은 발음이 연속되는 경우를 체크해서 열외시키기
// 2-2. 각 단어별로 발음 불가능한 단어를 공백으로 만들기
// 3. 공백을 제거했을 때의 값이 0이면 발음 가능
// 4. 단어의 개수 리턴