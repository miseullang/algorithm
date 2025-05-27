function solution(age) {
    let answer = '';
    const ageString = age.toString().split('');
    answer = ageString.map((index) => 'abcdefghij'[index]).join('')
    return answer;
}
