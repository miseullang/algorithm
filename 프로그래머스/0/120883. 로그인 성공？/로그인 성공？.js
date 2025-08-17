function solution(id_pw, db) {
    const [userId, userPw] = id_pw;
    
    const userMap = new Map(db);
    
    if (!userMap.has(userId)) {
        return "fail";
    }
    
    return userMap.get(userId) === userPw ? "login" : "wrong pw";
}