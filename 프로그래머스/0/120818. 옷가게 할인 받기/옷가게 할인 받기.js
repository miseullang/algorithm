function solution(price) {
    const hunThousand = 100000;
    if (price >= hunThousand * 5) {
        return Math.floor(price - price * 0.2);
    } else if (price >= hunThousand * 3) {
        return Math.floor(price - price * 0.1);
    } else if (price >= hunThousand) {
        return Math.floor(price - price * 0.05);
    }
    return price;
}