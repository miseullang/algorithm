function solution(numbers, direction) {
    var answer = [];
    
    if (direction === "right") {
        const lastElement = numbers[numbers.length - 1];
        answer = [lastElement, ...numbers.slice(0, numbers.length - 1)];
    } else if (direction === "left") {
        const firstElement = numbers[0];
        answer = [...numbers.slice(1), firstElement];
    }
    
    return answer;
}