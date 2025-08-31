function solution(my_string) {
    return [...my_string].map((_, i) => my_string.slice(i)).sort();
}

// function solution(my_string) {
//     const answer = [];
    
//     for (let i = 0; i < my_string.length; i++) {
//         answer.push(my_string.slice(i));
//     }
    
//     return answer.sort();