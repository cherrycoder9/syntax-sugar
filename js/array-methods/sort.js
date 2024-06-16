/*
    자바스크립트 배열 메서드
    배열의 요소를 정렬된 순서로 재배열
    기본 정렬 순서는 문자열 유니코드 코드 포인트 순서에 따름
    숫자나 커스텀 객체의 정렬을 위해서는 비교 함수를 제공할 수 있음 
    
    ! 문법
    arr.sort([compareFunction])

    ! 매개변수
    1. compareFunction (opt): 정렬 순서를 정의하는 함수. 
    두 개의 인수를 받으며, 반환값에 따라 요소들의 순서가 결정됨 
        - compareFunction(a, b):
        - a가 b보다 작으면 음수 반환 (a를 b보다 앞에 둠)
        - a가 b보다 크면 양수 반환 (a를 b보다 뒤에 둠)
        - a와 b가 같으면 0 반환 (순서를 바꾸지 않음)

    ! 반환 값
    원본 배열에 정렬된 순서를 반영한 배열. 원본 배열이 변경됨
*/

// 기본 문자열 정렬 
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// 숫자 배열 정렬(기본). 기본 정렬은 문자열 유니코드 코드 포인트 순서에 따름
let numbers = [10, 5, 40, 25];
numbers.sort();
console.log(numbers);

// 숫자 배열 정렬(비교 함수 사용). 올바른 숫자 정렬 방법
numbers = [10, 5, 40, 25];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 사용자 객체 배열을 이름순으로 정렬하는 예제 
let users = [
    { name: "Charlie", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 35 },
];
users.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(users);

// 사용자 객체 배열을 나이순으로 정렬 
users.sort((a, b) => a.age - b.age);
console.log(users);

// 숫자 배열을 내림차순으로 정렬
numbers = [10, 5, 40, 25];
numbers.sort((a, b) => b - a);
console.log(numbers);

// 문자열 배열을 길이순으로 정렬 
let words = ["banana", "apple", "cherry", "date"];
words.sort((a, b) => a.length - b.length);
console.log(words);

// 원본 배열을 보존하려면 slice나 spread operator로 배열을 복사한 후 정렬해야 함
numbers = [10, 5, 40, 25];
let sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(numbers);
console.log(sortedNumbers);

/*
    * 정리
    * 비교 함수가 없으면 요소들은 유니코드 코드 포인트 순서로 정렬
    * 숫자 정렬에 부적합할 수 있음
    * 필요에 따라 복잡한 비교 함수를 작성할 수도 있음 
*/