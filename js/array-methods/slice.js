/*
    자바스크립트 배열 메서드
    배열의 일부분을 선택해 새로운 배열로 반환
    원본 배열은 변경되지 않음

    ! 문법
    arr.slice([begin[, end]])

    ! 매개변수
    1. begin (opt): 추출을 시작할 인덱스. 기본값은 0. 음수인 경우 배열의 끝에서부터 인덱스를 계산
    2. end (opt): 추출을 끝낼 인덱스 (end 인덱스는 포함되지 않음). 
        기본값은 배열의 길이. 음수인 경우 배열의 끝에서부터 인덱스를 계산 

    ! 반환 값
    선택된 요소들을 포함한 새로운 배열 
*/

// 배열의 일부 요소를 추출하는 예제 
let array = [1, 2, 3, 4, 5];
let slicedArray = array.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// 시작 인덱스부터 끝까지의 요소를 추출하는 예제
slicedArray = array.slice(2);
console.log(slicedArray); // [3, 4, 5]

// 음수 인덱스를 사용해 끝에서부터 요소를 추출하는 예제
slicedArray = array.slice(-3);
console.log(slicedArray);

// 문자열에서도 slice 메서드 사용 가능
let text = "Hello, world!";
let slicedText = text.slice(7, 12);
console.log(slicedText); // "world"

// 객체 배열에서 일부 객체를 추출
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let slicedUsers = users.slice(1, 3);
console.log(slicedUsers);

// 2차원 배열에서 일부 행을 추출
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let slicedMatrix = matrix.slice(0, 2);
console.log(slicedMatrix);

// slice는 얕은 복사임 
array = [{ name: "Alice" }, { name: "Bob" }];
slicedArray = array.slice(1);
slicedArray[0].name = "Charlie";
console.log(array[1].name);

/*
    * 정리
    * slice는 얕은 복사 수행. 복사된 배열의 객체는 원본 배열 객체와 동일한 참조 
    * end 인덱스 직전까지의 요소만 포함됨에 주의 
    * -1은 배열의 마지막 요소를 의미함 
*/