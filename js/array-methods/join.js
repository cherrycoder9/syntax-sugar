/*
    자바스크립트 배열 메서드
    배열의 모든 요소를 문자열로 결합해 하나의 문자열로 반환하는 자바스크립트 배열 메서드
    각 요소는 주어진 구분자 문자열로 구분됨. 배열을 문자열로 변환할때 사용

    ! 문법
    let resultString = array.join(separator);

    ! 매개변수
    - separator (선택): 배열 요소를 구분하는데 사용할 문자열. 기본값은 콤마
*/

// 기본 구분자인 콤마로 배열을 문자열로 결합
let arr = [1, 2, 3, 4];
let result = arr.join();
console.log(result); // "1,2,3,4"

// 사용자 정의 구분자를 사용해 배열을 문자열로 결합 
arr = [1, 2, 3, 4];
result = arr.join(' - ');
console.log(result);

// 구분자로 빈 문자열을 사용해 배열 요소를 결합 
arr = ['H', 'e', 'l', 'l', 'o'];
result = arr.join('');
console.log(result); // "Hello"

// 빈 배열에서 .join()을 호출하면 빈 문자열이 반환됨 
arr = [];
result = arr.join();
console.log(result); // ""

// undefined, null, 또는 빈 문자열이 있는 배열을 결합하면
arr = [1, undefined, 2, null, 3, ''];
result = arr.join('-');
console.log(result);

// 배열을 CSV 형식의 문자열로 변환 
let data = [
    ['Name', 'Age', 'City'],
    ['John', 30, 'New York'],
    ['Jane', 25, 'San Francisco']
];
let csv = data.map(row => row.join(',')).join('\n');
console.log(csv);

/*
    * 정리
    * .join() 메서드는 배열 요소를 문자열로 결합해 반환
    * 선택적으로 구분자를 지정할 수 있음. 기본 구분자는 콤마
    * 빈 배열은 빈 문자열을 반환함
*/