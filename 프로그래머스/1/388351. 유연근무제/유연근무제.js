function solution(schedules, timelogs, startday) {
  let answer = 0;
  
  for (let i = 0; i < schedules.length; i++) {
    let count = 0;
    
    for (let j = 0; j < 7; j++) {
      const day = (startday + j - 1) % 7 + 1;
      if (day === 6 || day === 7) continue;
      
      // 출근 희망 시각 + 10분 계산
      const hour = Math.floor(schedules[i] / 100);
      const minute = schedules[i] % 100;
      const totalMinute = minute + 10;
      
      const deadlineHour = hour + Math.floor(totalMinute / 60);
      const deadlineMinute = totalMinute % 60;
      const deadline = deadlineHour * 100 + deadlineMinute;
      
      if (timelogs[i][j] <= deadline) {
        count++;
      }
    }
    
    if (count === 5) answer++;
  }
  
  return answer;
}