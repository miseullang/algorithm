function solution(answers) {
    
    const student1 = [1,2,3,4,5];
    const student2 = [2,1,2,3,2,4,2,5];
    const student3 = [3,3,1,1,2,2,4,4,5,5];
    
    const answer1 = answers.reduce((count, answer, index) => {
        return answer === student1[index % student1.length] ? count + 1 : count;
    }, 0);
    const answer2 = answers.reduce((count, answer, index) => {
        return answer === student2[index % student2.length] ? count + 1 : count;
    }, 0);
    const answer3 = answers.reduce((count, answer, index) => {
        return answer === student3[index % student3.length] ? count + 1 : count;
    }, 0);
    
    const max = Math.max(answer1, answer2, answer3);
    
    const answer = [];
    if(answer1 === max) answer.push(1);
    if(answer2 === max) answer.push(2);
    if(answer3 === max) answer.push(3);
    
    return answer;
}

// 문제 정의
// 1,2,3번의 문제 찍는 패턴과 정답 리스트 answer 배열 비교
// 가장 많이 맞힌 사람을 배열로 리턴
// => 여럿인 경우 오름차순 정렬 후 리턴

// 의사 코드
// 1. 각 수포자별 찍기 패턴 정의
// 2. 정답 배열을 순회하면서 각 패턴별로 정답과 비교 => 정답 개수 산출
// => 패턴의 길이와 정답 길이가 다르므로 패턴의 배열이 정답 배열의 길이와 같게 순환하도록 조정
// 2-1. 순회 중인 정답 배열의 인덱스 / 패턴 배열의 길이 ... 나머지 사용
// => 나머지는 제수(나누는 수)보다 클 수 없으므로 패턴의 배열이 끝나면 다시 처음으로 돌아감
// 3. 2의 산출된 정답 개수 중 가장 큰 수 찾기
// 4. 3의 값과 정답 개수가 같은 경우 해당 번호를 배열에 넣기