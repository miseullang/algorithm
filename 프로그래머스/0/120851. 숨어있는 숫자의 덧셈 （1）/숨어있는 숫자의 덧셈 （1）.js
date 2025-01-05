function solution(my_string) {
    return my_string.split('')
                   .filter(element => /[0-9]/.test(element))
                   .reduce((acc, cur) => acc + Number(cur), 0);
}