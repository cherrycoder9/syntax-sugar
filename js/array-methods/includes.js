/*
    자바스크립트 배열 메서드
    배열이 특정 요소를 포함하고 있는지 여부를 확인해 true 또는 false를 반환
    문자열 메서드로도 사용 가능하며, 문자열이 특정 부분 문자열을 포함하고 있는지 여부 확인
    배열과 문자열 모두에서 특정 값을 찾을때 유용함 

    ! 문법 (배열)
    arr.includes(valueToFind[, fromIndex])
    ! 문법 (문자열)
    str.includes(searchString[, position])

    ! 매개변수 (배열)
    1. valueToFind: 배열에서 찾고자 하는 요소
    2. fromIndex (opt): 검색을 시작할 인덱스. 기본값은 0. 음수인 경우 배열의 끝에서부터 계산됨 
    ! 매개변수 (문자열)
    1. searchString: 문자열에서 찾고자 하는 부분 문자열
    2. position (opt): 검색을 시작할 인덱스. 기본값은 0

    ! 반환 값
    배열 또는 문자열에 valueToFind 또는 searchString이 포함되어 있으면 true
    그렇지 않으면 false 반환 
*/

// 숫자 배열에 특정 숫자가 포함되어 있는지 확인하는 예제 
let numbers = [1, 2, 3, 4, 5];
let includesThree = numbers.includes(3);
console.log(includesThree);

// 지정된 인덱스부터 배열을 검색하는 예제
let includesFourFromIndexThree = numbers.includes(4, 3);
console.log(includesFourFromIndexThree);

// 음수 인덱스를 사용해 배열의 끝에서부터 검색하는 예제
let includesTwoFromIndexMinusThree = numbers.includes(2, -3);
// false (끝에서 세 번째 인덱스부터 검색 시작, 2는 없음)
console.log(includesTwoFromIndexMinusThree);

// 문자열에 특정 부분 문자열이 포함되어 있는지 확인하는 예제
let text = "Hello, world!";
let includesWorld = text.includes("world");
console.log(includesWorld);

// 지정된 위치부터 문자열을 검색하는 예제
let includesWorldFromIndexSeven = text.includes("world", 7);
console.log(includesWorldFromIndexSeven); // true

// NaN 포함 여부도 확인 가능
let array = [1, 2, NaN];
console.log(array.includes(NaN)); // true

// 객체 배열에서 특정 객체가 포함되어 있는지 확인
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };
let obj3 = { name: "Charlie" };
array = [obj1, obj2];
console.log(array.includes(obj1)); // true
console.log(array.includes(obj3)); // false

// 부분 배열의 포함 여부를 확인 
array = [1, 2, 1, 3, 4, 5];
let subArray = [2, 3];
let isSubArrayIncluded = subArray.every(value => {
    console.log(`value: ${value}, array: ${array}`);
    return array.includes(value);
});
console.log(isSubArrayIncluded); // true (모든 subArray 요소가 array에 포함됨)

/*
    * 정리
    * "A"와 "a"는 다르게 처리됨 
    * -0과 0을 구분하지 않음
*/