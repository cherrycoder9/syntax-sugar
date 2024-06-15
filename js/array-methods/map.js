/*
    자바스크립트 배열 메서드
    배열의 모든 요소에 대해 제공된 함수를 호출
    그 결과를 모아 새로운 배열을 반환 
    원본 배열은 변경되지 않음 

    ! 문법
    arr.map(callback(currentValue[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 3가지 인수를 가짐
        - currentValue: 처리할 현재 요소
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): map을 호출한 배열
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값

    ! 반환 값 
    각 요소에 대해 callback 함수가 호출된 결과를 포함하는 새로운 배열 
*/

// 숫자 배열의 각 요소를 제곱하는 예제 
let numbers = [1, 2, 3, 4, 5];
let squaredNumber = numbers.map(number => number * number);
console.log(squaredNumber);

// 사용자 객체 배열에서 이름만 추출하는 예제 
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
let names = users.map(user => user.name);
console.log(names);

// 콜백 함수의 인덱스와 배열 인수를 활용한 예제 
numbers = [1, 2, 3, 4, 5];
let mappedNumbers = numbers.map((number, index, array) => {
    console.log(`number: ${number}, index: ${index}, array: ${array}`);
    return number * 2;
});
console.log(mappedNumbers); // [2, 4, 6, 8, 10]

// 문자열 배열의 각 요소를 대문자로 변환하는 예제
let fruits = ["apple", "banana", "cherry"];
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

// 중첩된 배열의 각 요소를 평면화하고 2배로 만드는 예제
let nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let flatMappedArray = nestedArray.map(subArray => subArray.map(number => number * 2));
console.log(flatMappedArray);

// 객체의 속성으로 있는 배열을 변환하는 예제
let people = [
    { name: "John", pets: ["dog", "cat"] },
    { name: "Jane", pets: ["parrot"] },
    { name: "Jim", pets: ["fish", "hamster"] },
];
let petCounts = people.map(person => ({ name: person.name, petCount: person.pets.length }));
console.log(petCounts);

/*
    * 정리
    * 배열의 각 요소를 일정한 방식으로 변환해 새로운 배열을 생성
*/