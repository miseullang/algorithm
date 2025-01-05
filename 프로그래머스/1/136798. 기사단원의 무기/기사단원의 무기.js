function solution(number, limit, power) {
    // 제곱근으로 약수 개수를 구하는 함수
    function getCount(num) {
        let count = 0;
        for(let i = 1; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                count++; // i가 약수인 경우
                if(i !== num/i) count++; // 쌍이 되는 약수 추가 (제곱근이 아닌 경우)
            }
        }
        return count;
    }
    
    let totalPower = 0;
    
    // 1부터 number까지 순회하면서 약수 개수 구하기
    for(let i = 1; i <= number; i++) {
        const divisorCount = getCount(i);
        // 총합 구하기 : limit을 초과하면 power를, 아니면 약수 개수를 더함
        totalPower += divisorCount > limit ? power : divisorCount;
    }
    
    return totalPower;
}

// 구하고자 하는 것 : 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게
// 주어지는 정보
// 1. number : 기사단원의 수
// 2. limit : 공격력의 제한 수치(정수)
// 3. power : 제한 수치를 초과한 기사가 사용할 무기의 공격력(정수)

// 제한 조건
// 1. 무기의 공격력 = 기사 번호의 약수 개수
// 1-1. 제한 수치(power) < 무기의 공격력 => 제한 수치(power)
// 2. 공격력 1 = 철 1kg

// 의사코드
// 1. 1부터 number까지의 값을 순회
// 2. 각 값에 대한 약수 개수를 값으로 갖는 배열 리턴 (제곱근으로 검사 범위 좁히기)
// 3. 2번 배열에서 power 이상의 값을 분리
// 3-1. 3번 배열의 길이 * power
// 3번에서 분리된 power 이하의 값의 총 합 + 3-1