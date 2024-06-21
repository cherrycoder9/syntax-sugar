/*
    자바스크립트 배열 메서드
    배열의 각 요소에 대해 주어진 함수를 호출한 결과를 평탄화(flatten)해 
    새로운 배열을 생성하는 메서드. 이 메서드는 .map()과 .flat()을 순차적으로
    호출하는 것과 같은 효과를 가지지만 더 효율적임.

    ! 문법
    let newArray = array.flatMap(callback(currentValue[, index[, array]]), thisArg)

    ! 매개변수
    1. callback: 새로운 배열 요소를 생성하는 함수. 이 함수는 3가지 인수를 가질 수 있음
        - currentValue: 배열의 현재 요소
        - index (선택): 배열의 현재 요소의 인덱스
        - array (선택): 호출된 배열 자체 
    2. thisArg (선택): callback을 실행할 때 this로 사용할 값 

    ! 반환 값
    1. .flatMap()는 기본적으로 깊이 1단계까지만 평탄화함
    2. 반환된 배열의 길이는 원래 배열 길이와 다를수 있음 
*/

// 각 요소를 매핑하고 평탄화하는 기본 예시 
let arr = [1, 2, 3, 4];
let result = arr.flatMap(x => [x + 1, x * 2]);
console.log(result);

// 위 예제를 map과 flat을 사용하는 경우와 비교 
let mapped = arr.map(x => [x + 1, x * 2]);
console.log(mapped);
let flattened = mapped.flat();
console.log(flattened);

// 요소를 필터링하면서 평탄화 (짝수인 경우에만 2배로 변환)
arr = [1, 2, 3, 4, 5];
result = arr.flatMap(x => x % 2 === 0 ? [x, x * 2] : []);
console.log(result);

/*
    * 정리
    * flatMap은 한 단계만 평탄화하기 때문에 중첩된 배열의 깊이가 1을 초과할 경우 완전히 평탄화되지 않음
    * 이 경우에는 .map()과 .flat(Infinity)를 조합하거나 재귀적인 접근을 사용해야 함 
*/