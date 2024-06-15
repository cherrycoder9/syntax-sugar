/*
    자바스크립트 배열 메서드
    주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열 반환
    원본 배열은 변경되지 않음

    ! 문법
    arr.filter(callback(element[, index[, array]])[, thisArg])
    [] 는 옵션(optional)이므로 생략 가능함

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 세가지 인수가 있음
        - element: 처리할 현재 요소
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): filter를 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값

    ! 반환 값 
    callback 함수의 테스트를 통과한 요소들로 이루어진 새로운 배열
    테스트를 통과한 요소가 없으면 빈 배열을 반환함 
*/

// 숫자 배열에서 짝수만 필터링하는 예제
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers); // [2, 4, 6]

// 사용자 객체 배열에서 나이가 30 이상인 사용자들만 필터링하는 예제
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let adults = users.filter(user => user.age >= 30);
console.log(adults);

// 콜백 함수의 인덱스와 배열 인수를 활용한 예제
numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter((number, index, array) => {
    console.log(`number: ${number}, index: ${index}, array: ${array}`);
    return number > 2;
});
console.log(filteredNumbers); // [3, 4, 5]

// 문자열 배열에서 특정 단어를 포함하는 요소들만 필터링하는 예제 
let fruits = ["apple", "banana", "grape", "mango", "pineapple"];
let fruitsWithA = fruits.filter(fruit => fruit.includes('g'));
console.log(fruitsWithA);

// 중첩 배열에서 길이가 2 이상인 배열만 필터링 
let nestedArray = [
    [1, 2],
    [3, 4, 5],
    [6]
];
let filteredArray = nestedArray.filter(subArray => subArray.length > 1);
console.log(filteredArray);

// 객체의 속성으로 있는 배열을 필터링하는 예제 
let people = [
    { name: "John", pets: ["dog", "cat"] },
    { name: "Jane", pets: [] },
    { name: "Jim", pets: ["fish"] },
];
let withPets = people.filter(person => person.pets.length > 0);
console.log(withPets);

/*
    * 정리
    * filter는 원본 배열을 수정하지 않고 새로운 배열 반환
    * callback 함수는 반드시 불리언 값을 반환해야 하며 true인 요소만 새 배열에 포함됨
*/