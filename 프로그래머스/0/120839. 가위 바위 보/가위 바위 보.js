function solution(rsp) {
    let result = '';
    [...rsp].forEach((element) => {
        if(element === '2') result += '0';
        else if(element === '0') result += '5';
        else if(element === '5') result += '2';
    });
    return result;
}