/*
    자바스크립트 배열 메서드
    주어진 판별 함수를 만족하는 배열의 첫 번째 요소의 인덱스 반환
    조건을 만족하는 요소가 없으면 -1을 반환함 
    특정 조건을 만족하는 요소의 인덱스를 찾을때 사용함 

    ! 문법
    arr.findIndex(callback(element[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 3가지 인수를 가짐
        - element: 처리할 현재 요소 
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): findIndex를 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값 

    ! 반환 값 
    주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스
    만족하는 요소가 없으면 -1 반환 
*/

// 숫자 배열에서 첫 번째 짝수의 인덱스를 찾는 예제
let numbers = [1, 3, 7, 8, 9];
let firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex);

// 사용자 객체 배열에서 나이가 30인 첫 번째 사용자의 인덱스를 찾는 예제
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
let userIndex = users.findIndex(user => user.age === 30);
console.log(userIndex);

// 콜백 함수의 인덱스와 배열 인수를 활용한 예제 
numbers = [10, 20, 30, 40, 50];
let firstLargeNumberIndex = numbers.findIndex((number, index, array) => {
    console.log(`number: ${number}, index: ${index}, array: ${array}`);
    return number > 25;
});
console.log(firstLargeNumberIndex);

// 중첩 배열에서 길이가 3인 첫 번째 배열의 인덱스 찾기 
let nestedArray = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
let arrayWithLengthThreeIndex = nestedArray.findIndex(subArray => subArray.length === 3);
console.log(arrayWithLengthThreeIndex);

/*
    * 정리
    * 조건을 만족하는 첫번째 요소의 인덱스만 반환  
    * 조건 만족하는 요소가 없으면 -1 반환. 이것을 처리하는 로직 필요 
    * 원본 배열 변경되지 않음 
*/