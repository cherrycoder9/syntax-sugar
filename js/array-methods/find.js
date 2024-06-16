/*
    자바스크립트 배열 메서드
    주어진 판별 함수를 만족하는 첫 번째 요소를 반환
    조건을 만족하는 요소가 없으면 undefined 반환 
    배열에서 특정 조건을 만족하는 요소를 찾을 때 사용

    ! 문법
    arr.find(callback(element[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 3가지 인수를 가짐
        - element: 처리할 현재 요소 
        - index (opt): 처리할 현재 요소의 인덱스
        - array (opt): find를 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값

    ! 반환 값 
    주어진 판별 함수를 만족하는 첫 번째 요소
    만족하는 요소가 없으면 undefined 반환 
    
*/

// 숫자 배열에서 첫 번째 짝수를 찾는 예제 
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(number => number % 2 == 0);
console.log(firstEven);

// 사용자 객체 배열에서 나이가 30인 첫 번째 사용자를 찾는 예제
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
let user = users.find(user => user.age === 30);
console.log(user);

// 콜백 함수의 인덱스와 배열 인수를 활용한 예제 
numbers = [10, 20, 30, 40, 50];
let firstLargeNumber = numbers.find((number, index, array) => {
    console.log(`number: ${number}, index: ${index}, array: ${array}`);
    return number > 25;
});
console.log(firstLargeNumber);

// 중첩된 배열에서 길이가 3인 첫 번째 배열 찾기 
let nestedArray = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
let arrayWithLengthThree = nestedArray.find(subArray => subArray.length === 3);
console.log(arrayWithLengthThree);

// HTML 요소 컬렉션에서 특정 클래스 이름을 가진 첫 번째 요소를 찾는 예제
let elements = document.querySelectorAll('div');
let targetElement = Array.from(elements).find(element => element.classList.contains('target-class'));
console.log(targetElement); // <div class="target-class">...</div>
/*
    HTMLCollection이나 NodeList 같은 DOM 컬렉션은 배열이 아니어서 
    배열 메서드(find, map, filter 등)를 바로 쓸 수 없음. 
    그래서 Array.from을 사용해서 배열로 변환한 다음 배열 메서드를 쓸 수 있음.

    elements는 querySelectorAll로 반환된 NodeList인데, 
    이 객체는 배열 메서드를 직접 지원하지 않음. 
    Array.from을 사용해 NodeList를 배열로 변환한 후 
    배열 메서드를 사용할 수 있음.
*/

/*
    * 정리
    find는 조건을 만족하는 첫 번째 요소만 반환
    모든 조건을 만족하는 요소를 찾으려면 filter를 사용해야 함
    조건을 만족하는 요소가 없으면 undefined를 반환함
    이것을 처리한느 로직이 필요할 수 있음
    원본 배열을 수정하지 않음 
*/