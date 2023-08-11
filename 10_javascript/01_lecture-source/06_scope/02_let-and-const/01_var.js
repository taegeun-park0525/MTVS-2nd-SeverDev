// 1. 변수 중복 선언 허용
// -> 중복선언이되면 코드의 에러를 찾기 힘들 수 있다.
var msg = '안녕하세요';
console.log(msg);

var msg = '안녕히가세요';
console.log(msg);

var msg;
console.log(msg);

// 2. 함수 레벨 스코프
// 함수 외부에 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가 된다.

var i = 0;
for(var i = 0; i < 10; i++) {}
console.log(i);

// 3. 변수 호이스팅
console.log(test);
var test = '반갑습니다' ;
console.log(test);z