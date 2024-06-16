/*
    자바스크립트 배열 메서드
    배열의 각 요소에 대해 주어진 함수를 한 번씩 실행
    반복문과 유사하지만 forEach()는 반환값이 없음
    원본 배열은 변경되지 않음 

    ! 문법
    arr.forEach(callback(currentValue[, index[, array]])[, thisArg])

    ! 매개변수
    1. callback: 각 요소에 대해 실행할 함수. 3가지 인수를 가짐
        - currentValue: 처리할 현재 요소
        - index (opt): 처리할 현재 요소의 인덱스 
        - array (opt): forEach를 호출한 배열 
    2. thisArg (opt): callback을 실행할 때 this로 사용하는 값 

    ! 반환 값 
    반환값 없음 (undefined)
*/

// 숫자 배열의 각 요소를 출력하는 예제 
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});

// 사용자 객체 배열의 각 요소에 대해 작업을 수행하는 예제 
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

// 비동기 작업 수행시 주의점
// 이 코드는 각 숫자가 1초 간격으로 출력되지 않음
// forEach는 비동기적으로 동작하지 않아서 await가 작동하지 않기 때문
// forEach는 모든 콜백을 즉시 호출하고,
// 비동기 처리는 각각의 콜백 내에서 독립적으로 진행됨
// 따라서 모든 setTimeout이 거의 동시에 시작되어 1초 후에 거의 동시에 숫자를 출력
// 숫자를 1초 간격으로 순차적으로 출력하려면 for...of 루프를 사용해야 함
numbers = [1, 2, 3, 4, 5];
numbers.forEach(async (number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(number);
});
async function printNumbers() {
    for (let number of numbers) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(number);
    }
}
printNumbers();


/*
    * 정리
    forEach는 항상 undefined 반환
    forEach 내에서는 break문이나 return문을 사용할 수 없음
    루프를 중단하거나 조기 종료할 수 없음. 필요한 경우 for루프나 some(), every() 메서드 고려
    비동기 작업 수행시 모든 작업이 완료될 때까지 기다리지 않음.
*/