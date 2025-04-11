function solution(num, k) {
    const numStr = String(num);
    
    const index = numStr.indexOf(String(k));
    
    return index === -1 ? -1 : index + 1;
}