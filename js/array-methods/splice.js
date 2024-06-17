/*
    자바스크립트 배열 메서드
    원래 배열을 변경함 
    변경된 요소들을 배열로 반환 

    ! 문법
    array.splice(start, deleteCount, item1, item2, ...);

    ! 매개변수
    - start: 배열에서 변경을 시작할 인덱스. 음수를 사용하면 배열의 끝에서부터 인덱스를 셈 
    - deleteCount: 제거할 요소의 개수. 생략하거나 0을 입력하면 요소가 제거되지 않음
    - item1, item2, ...: 배열에 추가할 요소들. 생략하면 요소가 추가되지 않음
*/

// 지정된 인덱스에서 지정된 수만큼 요소를 제거
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2);
console.log(arr); // [1, 2, 5]
console.log(removed); // [3, 4]

// 지정된 인덱스에 새로운 요소를 추가함 
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b');
console.log(arr); // [1, 2, 'a', 'b', 5]

// 음수 인덱스를 사용하면 배열의 끝에서부터 요소를 제거할 수 있음
arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1);
console.log(arr);

// 배열의 모든 요소를 제거하고 빈 배열로 만들기
arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length);
console.log(arr); // []

// 요소를 제거하고 동시에 새 요소를 추가
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b', 'c');
console.log(arr);

/*
    * 정리
    * 원래 배열을 보존하면서 작업하려면 배열을 복사한 후 splice()를 적용해야 함 
    * 
*/