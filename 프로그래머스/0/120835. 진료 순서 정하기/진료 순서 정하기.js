function solution(emergency) {
    const sorted = [...emergency].sort((a,b) => b - a);
    
    const rank = {};
    sorted.forEach((value, index) => {
        rank[value] = index + 1;
    })
    
    
    return emergency.map(val => rank[val]);
}