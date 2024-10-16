function solution(phone_number) {
    first = phone_number.slice(0, -4);
    last = phone_number.slice(-4);

    var answer = '';
    
    for (i = 0; i <= first.length-1; i++) {
        answer += '*';
    }
    return answer + last;
}