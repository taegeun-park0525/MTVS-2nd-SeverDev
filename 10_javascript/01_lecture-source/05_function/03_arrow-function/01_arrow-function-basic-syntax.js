// 화살표 함수
// ES6에서 도입된 화살표 함수는 function 키워드 대신 화살표를 이용하여 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 익명 함수로 정의한다.

var message;
message = function() {
    return "hello world";
};

console.log(message());

message = () => {
    return "Arrow Function!";
};
console.log(message());

//명령문이 하나만 있는 경우 중괄호 생략가능
// 이 때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.
// (return 생략)
message = () => "Arrow Function are simple!";
console.log(message());

//매개변수가 있는 경우
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message("매개변수1", "매개변수2"));

//매개변수가 한개인 경우
message = val => "Arrow" + val;
console.log(message("매개변수가 한개야"));