function solution(keyinput, board) {
    const MOVE = {
        up: [0, 1],
        down: [0, -1], 
        left: [-1, 0],
        right: [1, 0]
    };
    
    let [x, y] = [0, 0];
    const [maxX, maxY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    for (let key of keyinput) {
        const [dx, dy] = MOVE[key];
        x = Math.max(-maxX, Math.min(maxX, x + dx));
        y = Math.max(-maxY, Math.min(maxY, y + dy));
    }
    
    return [x, y];
}