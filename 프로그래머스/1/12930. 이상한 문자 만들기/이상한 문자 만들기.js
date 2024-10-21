function solution(s) {
    var answer = s.split(' ').map(word => 
        word.split('').map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
    ).join(' ');
    console.log(answer);
    return answer;
}