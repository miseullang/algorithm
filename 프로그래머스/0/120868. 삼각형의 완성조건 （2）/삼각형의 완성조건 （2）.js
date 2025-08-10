
function solution(sides) {
    const [a, b] = sides;
    
    const minSide = Math.abs(a - b);
    const maxSide = a + b;
    
    const answer = (maxSide - 1) - (minSide + 1) + 1;
    
    return answer;
}