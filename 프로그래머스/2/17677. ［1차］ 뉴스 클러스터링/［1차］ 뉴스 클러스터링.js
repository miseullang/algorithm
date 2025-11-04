function solution(str1, str2) {
    function preprocess(str) {
        const arr = [];
        str = str.toUpperCase();
        for (let i = 0; i < str.length - 1; i++) {
            const pair = str[i] + str[i + 1];
            if (/^[A-Z]{2}$/.test(pair)) arr.push(pair);
        }
        return arr;
    }

    const obj1 = preprocess(str1);
    const obj2 = preprocess(str2);

    // 교집합
    function multisetIntersection(A, B) {
        const copyB = [...B];
        const result = [];
        
        for (let a of A) {
            const targetIndex = copyB.indexOf(a);
            if (targetIndex !== -1) {
                result.push(a);
                copyB.splice(targetIndex, 1);
            }
        }
        return result;
    }

    // 합집합
    function multisetUnion(A, B) {
        // A와 B에 등장한 원소 목록 (중복 제거)
        const unique = Array.from(new Set([...A, ...B]));
        const result = [];

        for (let val of unique) {
            const countA = A.filter(x => x === val).length;
            const countB = B.filter(x => x === val).length;
            const maxCount = Math.max(countA, countB);
            for (let i = 0; i < maxCount; i++) {
                result.push(val);
            }
        }

        return result;
    }

    const interSection = multisetIntersection(obj1, obj2);
    const union = multisetUnion(obj1, obj2);

    // 두 집합이 모두 공집합일 경우
    if (union.length === 0) return 65536;

    return Math.floor((interSection.length / union.length) * 65536);
}

    // 자카드 유사도 = 교집합 / 합집합
    // 문자열의 유사도 -> 글자를 두 음소씩 끊어서 집합 생성
        // 대소문자 구분 X -> 대문자 통일
        // 단, 영문자 쌍만 허용하고 나머지는 버리기
    // 교집합, 합집합 구하기
    // return Math.floor(교 / 합 * 65536)