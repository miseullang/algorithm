function solution(my_string) {
    const numbers = my_string.match(/[0-9]/g);
    
    const answer = numbers ? numbers.map(num => parseInt(num)).sort((a, b) => a - b) : [];
    
    return answer;
}