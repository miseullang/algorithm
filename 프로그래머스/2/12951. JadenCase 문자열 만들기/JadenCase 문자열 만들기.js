function solution(s) {
    const splitString = s.split(' ');
    const jadenCase = splitString.map((firstChar) => {
        return firstChar.charAt(0).toUpperCase() + firstChar.slice(1).toLowerCase();
    });
    return jadenCase.join(' ');
}