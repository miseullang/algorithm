function solution(age) {
    var answer = '';
    const ageString = age.toString();
    
    for (let i = 0; i < ageString.length; i++) {
        const digit = parseInt(ageString[i]);
        answer += String.fromCharCode(97 + digit);
    }
    
    return answer;
}