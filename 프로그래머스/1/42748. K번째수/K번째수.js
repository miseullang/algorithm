function solution(array, commands) {
    var answer = [];
    commands.map((val) => {
        const slicedArr = array.slice(val[0] - 1, val[1]);
        const sortedArr = slicedArr.sort((a,b) => a - b);
        answer.push(sortedArr[val[2] - 1]);   
    })
    
    return answer;
}