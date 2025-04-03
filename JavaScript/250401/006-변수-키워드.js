// var
// 재선언과 재할당이 가능
var name = "weniv"; // @경현
console.log("name: ", name);

// 재할당
name = "licat";
console.log("name: ", name);

// 재선언
var name = "wade"; // @?
console.log("name: ", name);

console.log("name이 weniv", name); // 예측하지 못한 결과

// let
// 재할당은 가능, 재선언은 불가
let age = 20;
console.log("age: ", age);

// 재할당
age = 30;
console.log("age: ", age);

// 재선언 X
// let age = 40;

// const
// 재선언과 재할당 모두 불가
const company = "weniv";

// 재할당 X
// company = "licat";
console.log("company: ", company);

// 재선언 X
// const company = "wade";
