/*
    자바스크립트 배열 메서드
    인수로 주어진 배열이나 값들을 기존 배열에 합쳐 새로운 배열 반환
    원본 배열은 변경되지 않음.
    배열을 합치거나 추가할때 유용함 

    ! 문법
    arr.concat(value[, value2[, ...[, valueN]]])

    ! 매개변수
    1. valueN: 배열 또는 값. 원본 배열에 추가될 요소들. 여러 개의 값을 인수로 전달할 수 있음

    ! 반환 값
    새로운 배열. 원본 배열과 인수로 제공된 배열이나 값들이 합쳐짐 
*/

// 두 배열을 합치는 예제 
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// 여러 배열을 하나로 합치는 예제 
array1 = [1];
array2 = [2];
let array3 = [3];
combinedArray = array1.concat(array2, array3);
console.log(combinedArray);

// 배열과 개별 값을 합치는 예제
let array = [1, 2, 3];
let newArray = array.concat(4, 5, [6, 7]);
console.log(newArray);

// 객체 배열을 합치는 예제
array1 = [{ name: "Alice" }];
array2 = [{ name: "Bob" }];
combinedArray = array1.concat(array2);
console.log(combinedArray);

// 중첩 배열을 합치는 예제. concat()은 1단계까지만 평탄화됨
let nestedArray1 = [[1], [2]];
let nestedArray2 = [[3], [4]];
combinedArray = nestedArray1.concat(nestedArray2);
console.log(combinedArray);

// 합치는 또다른 방법
array1 = [1, 2, 3];
array2 = [4, 5, 6];
combinedArray = [].concat(array1, array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

/*
    * 정리
    * 원본 배열을 변경하지 않고 새로운 배열 반환 
    * concat은 얕은 복사를 수행. 배열 내 객체는 참조로 복사됨  
    * 여러 개의 배열이나 값을 인수로 받을 수 있음
    * 1단계까지만 배열을 평탄화함. 더 깊은 중첩 배열을 평탄화하려면 flat() 메서드 사용
    * 
*/