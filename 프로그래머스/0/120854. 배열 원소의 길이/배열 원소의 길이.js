function solution(strlist) {
    const answer = [];
    strlist.forEach((word) => {
        answer.push(word.length);
    })
    return answer;
}