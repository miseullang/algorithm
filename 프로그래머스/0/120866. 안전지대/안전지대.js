function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    let safeCount = 0;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] !== 1) {
                let isSafe = true;
                
                for (let [deltaRow, deltaCol] of directions) {
                    const newRow = row + deltaRow;
                    const newCol = col + deltaCol;
                    if (newRow >= 0 && newRow < rows && newCol >= 0 &&
                        newCol < cols && board[newRow][newCol] === 1) {
                        isSafe = false;
                        break;
                    }
                }
                
                if (isSafe) safeCount++;
            }
        }
    }
    
    return safeCount;
}