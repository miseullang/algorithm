/*
요세푸스 문제

문제 설명:
- N명의 사람이 원 형태로 앉아있음 (번호는 1~N까지 부여)
- 임의의 숫자 K가 주어질 때:
 1. 1번 번호부터 가진 사람을 기준으로 K번째 사람을 없앰
 2. 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앰

제약 조건:
- N과 K는 1이상 1000이하의 자연수

입출력 예:
N = 5, K = 2인 경우
return = 3

풀이 접근:
N과 K에 실제 값을 넣고 요세푸스 문제를 직접 풀어봄 
N = 5이므로 1~5로 배열을 만들고 사람을 원형으로 배치함

시간 제한: 30분
복잡도: O(N*K)
*/

function solution(N, K) {
  class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
      this.items.push(item);
      this.rear++;
    }

    pop() {
      return this.items[this.front++];
    }

    isEmpty() {
      return this.front === this.rear;
    }
  }

  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
      queue.push(i);
  }
  
  while (queue.rear - queue.front > 1) {
      for (let i = 1; i < K; i++) {
          // K-1번째 사람까지는 뒤로 다시 넣음
          queue.push(queue.pop());
      }
      // K번째 사람은 제거
      queue.pop();
  }
  
  return queue.pop();

}

// 테스트 케이스
console.log(solution(5, 2));