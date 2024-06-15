/*
    자바스크립트 배열 메서드
    배열의 각 요소에 대해 주어진 리듀서 함수를 실행해 하나의 값 반환
    이 값은 콜백 함수에서 반환된 누산기의 결과임
    원본 배열은 변경되지 않음

    ! 문법
    arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 4가지 인수를 가짐
        - accumulator: 누산기. 콜백 함수의 반환값을 누적함
        - currentValue: 처리할 현재 요소
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): reduce를 호출한 배열 
    2. initialValue (opt): 초기값. 초기값이 제공되지 않으면 배열의 첫 번째 요소가 초기값이 됨

    ! 반환 값 
    누산기의 최종 결과값을 반환 
*/

// 숫자 배열의 합을 계산하는 예제
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// 배열에서 최대값을 찾는 예제
numbers = [1, 2, 3, 4, 5];
let max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, -Infinity);
console.log(max);

// 사용자 객체 배열에서 나이의 합을 계산하는 예제
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

let totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
console.log(totalAge); // 90

// 중첩된 배열을 단일 배열로 평탄화하는 예제 
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator.concat(currentValue);
}, []);
console.log(flatArray);

// 객체 배열을 특정 속성값으로 그룹화하는 예제
let people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 25 },
    { name: "Jake", age: 22 },
];
let groupedByAge = people.reduce((accumulator, person) => {
    let age = person.age;
    if (!accumulator[age]) {
        accumulator[age] = [];
    }
    accumulator[age].push(person);
    return accumulator;
}, {});
console.log(groupedByAge);

/*
    * 정리
    * reduce는 원본 배열을 수정하지 않음
    * 초기값을 제공하지 않으면 배열의 첫 번째 요소가 accumulator의 초기값이 됨
    * 이 경우 배열이 비어 있으면 TypeError가 발생함 
*/