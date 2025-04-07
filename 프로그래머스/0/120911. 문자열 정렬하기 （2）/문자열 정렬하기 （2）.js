function solution(my_string) {
    let answer = '';
    
    let lowerString = my_string.toLowerCase();
    
    let sortedArray = lowerString.split('').sort();

    answer = sortedArray.join('');
    
    return answer;
}