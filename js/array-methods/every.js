/*
    자바스크립트 배열 메서드
    모든 요소가 조건을 만족하면 true 반환
    하나라도 만족하지 않으면 false 반환 

    ! 문법
    arr.every(callback(element[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 다음 세 가지 인수를 가짐 
        - element: 처리할 현재 요소 
        - index (opt): 처리할 현재 요소의 인덱스 
        - array (opt): every를 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값 

    ! 반환 값 
    배열의 모든 요소가 주어진 판별 함수를 만족하면 true, 그렇지 않으면 false
*/

// 숫자 배열의 모든 요소가 짝수인지 확인
let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // true

// 학생 객체 배열에서 모든 학생의 나이가 18세 이상인지 확인
let students = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 19 },
];
let allAdults = students.every(student => {
    console.log(student);
    return student.age >= 18;
});
console.log(allAdults); // false

// 문자열 배열의 모든 문자열이 길이가 5 이상인지 확인하는 예제
let words = ["hello", "world", "javascript", "coding"];
let allLongWords = words.every(word => word.length >= 5);
console.log(allLongWords); // true

// 배열의 모든 요소가 숫자인지 확인하는 예제
let mixedArray = [1, 2, 3, "4", 5];
let allNumbers = mixedArray.every(element => typeof element === 'number');
console.log(allNumbers); // false

//중첩된 배열에서 모든 배열의 길이가 2 이상인지 확인
let nestedArray = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
];
let allArraysLongEnough = nestedArray.every(subArray => subArray.length >= 2);
console.log(allArraysLongEnough); // true

/*
    * 정리
    * 조건을 만족하지 않으면 실행 중단하고 false 반환
    * 배열이 비어 있으면 항상 true 반환 
    * 원본 배열을 변경하지 않음 
*/