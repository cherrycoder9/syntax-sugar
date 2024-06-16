/*
    자바스크립트 배열 메서드
    조건을 만족하는 요소가 하나라도 있으면 true 반환
    모든 요소가 조건을 만족하지 않으면 false 반환 

    ! 문법
    arr.some(callback(element[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 3가지 인수를 가짐
        - element: 처리할 현재 요소
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): some을 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값 

    ! 반환 값 
    배열의 어떤 요소라도 주어진 판별 함수를 만족하면 true, 그렇지 않으면 false 
*/

// 숫자 배열에 짝수가 하나라도 있는지 확인
let numbers = [1, 3, 5, 7, 8];
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven);

// 사용자 객체 배열에서 나이가 30 이상인 사용자가 하나라도 있는지 확인
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
let hasAdult = users.some(user => {
    console.log(user);
    return user.age >= 30;
});
console.log(hasAdult);

/*
    * 정리
    some은 조건을 만족하는 요소를 찾으면 즉시 실행을 중단하고 true 반환하며 추가 검사를 하지 않음
    배열이 비어 있으면 false를 반환함 
    특정 조건을 만족하는 요소가 하나라도 있는지 확인할때 사용 
*/