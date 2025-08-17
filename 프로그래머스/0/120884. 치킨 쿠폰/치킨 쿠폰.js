function solution(chicken) {
    let coupons = chicken;
    let serviceFree = 0;
    
    while (coupons >= 10) {
        const newService = Math.floor(coupons / 10);
        serviceFree += newService;
        coupons = coupons % 10 + newService;
    }
    
    return serviceFree;
}
