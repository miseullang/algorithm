function solution(my_string) {
    return my_string.split('')
                   .map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
                   .join('');
}