// 즉시 실행 함수
// 함수를 정의함과 동시에 한번만 호출 할 수 있다. 이후에 다시 호출 불가.
// 익명함수를 사용하는게 일반적, 재사용이 불가하기 때문
(function() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출!')
})();

(function hello(name) {
    console.log('기명 즉시 실행 함수! 함수 정의와 동시에 호출!')
    console.log(`${name}님 안녕하세요`);
})('홍길동');