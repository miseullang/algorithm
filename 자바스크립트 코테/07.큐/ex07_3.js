/* 
문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

제한 사항
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
입출력 예
progresses	speeds	return
[93, 30, 55]	[1, 30, 5]	[2, 1]
[95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
입출력 예 설명
입출력 예 #1
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.

입출력 예 #2
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

※ 공지 - 2020년 7월 14일 테스트케이스가 추가되었습니다. 
*/

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

// 테스트 케이스
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
