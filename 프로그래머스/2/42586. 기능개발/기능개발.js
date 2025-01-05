function solution(progresses, speeds) {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    push(data) {
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size++;
    }

    pop() {
      if (!this.head) return null;

      const removeNode = this.head;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      this.size--;

      return removeNode.data;
    }

    isEmpty() {
      return this.size === 0;
    }
  }

  // 문제 정의
  // 1. 각 기능은 진도가 100%일 때 서비스에 반영 가능
  // 2. 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있음
  // 3. 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됨 (배포는 할 수 있을 때 한 번만 가능)

  // 구해야 하는 것 = 각 배포마다 몇 개의 기능이 배포되는지

  // 구현
  // 1. 각 기능의 진행률 (100% - 진도) / 개발 속도 = 남은 일수
  // 1.1 남은 일수가 소수점이면 올림 처리
  // 2. 남은 일수를 큐에 넣음
  // 3. 큐에서 맨 앞의 작업을 꺼내서 다음 작업의 남은 일수와 비교
  // 3-1. 다음 작업의 남은 일수가 더 작거나 같으면 같이 배포
  // 3-2. 다음 작업의 남은 일수가 더 크면 반복문 종료

  const queue = new Queue();
  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    const remainProgress = 100 - progresses[i];
    const daysLeft = Math.ceil(remainProgress / speeds[i]);
    queue.push(daysLeft);
  }

  while (!queue.isEmpty()) {
    let count = 1; // 이번 배포에서 배포할 기능의 수
    let currentWork = queue.pop();

    // 3-1. 다음 작업의 남은 일수가 더 작거나 같으면 같이 배포
    // 3-1-1. 큐가 비어있지 않을 때
    // 3-1-2. 현재 작업의 남은 일수가 다음 작업의 남은 일수보다 작거나 같을 때
    while (!queue.isEmpty() && currentWork >= queue.head.data) {
      count++;
      queue.pop();
    }

    answer.push(count);
  }

  return answer;
}
