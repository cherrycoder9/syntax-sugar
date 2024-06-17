/*
    자바스크립트 배열 메서드
    다차원 배열을 단일한 배열로 평탄화(flatten)하는 데 사용됨
    중첩 배열의 모든 하위 요소들을 지정한 깊이만큼 
    재귀적으로 이어붙인 새로운 배열을 반환 

    ! 문법
    let newArray = array.flat([depth]);

    ! 매개변수
    depth (opt): 중첩 배열을 평탄화할 깊이 수준을 지정. 기본값은 1
*/

// 기본적으로 flat 메서드는 한 단계 깊이까지 평탄화함
let arr = [1, 2, [3, 4]];
let flattened = arr.flat();
console.log(flattened);

// depth 값을 사용해 여러 단계의 중첩 배열 평탄화
arr = [1, 2, [3, 4, [5, 6]]];
flattened = arr.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// 모든 중첩 배열을 평탄화하려면 Infinity를 depth 값으로 사용
arr = [1, [2, [3, [4, [5, [6]]]]]];
flattened = arr.flat(Infinity);
console.log(flattened);

// flat 메서드는 배열 내의 빈 항목들을 무시함
arr = [1, 2, , 4, 5];
flattened = arr.flat();
console.log(flattened);

// 여러 중첩을 한단계만 평탄화하는 경우
arr = [1, 2, [3, [4, 5]], [6, [7, 8]], 9];
flattened = arr.flat(1);
console.log(flattened); // [ 1, 2, 3, [ 4, 5 ], 6, [ 7, 8 ], 9 ]

/*
    * 정리
    * 배열 내의 중첩된 구조를 단순하게 만들어 작업을 쉽게 할때 사용함
    * 데이터 처리나 변환 작업시 유용 
*/