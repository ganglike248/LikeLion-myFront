// const array = [12, 'string', true, function (){}, {}, [213,42]];
// console.log(array);
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


// let user1 = new Object(); // 객체 생성자 문법
// let user2 = {}; // 객체 리터럴 문법

// let user3 = { // 객체
//     name : 'John', // 키 = name, 값 = john
//     age : 30, // 키 = age, 값 = 30
// };

// console.log(user3);
// console.log(user3.name + ' ' + user3.age); // John 30


// JSON 객체 예시

// const user = {
//         name : 'John',
//         age : 30
// };
// console.log(user);

// // 객체를 문자열로
// const userStringify = JSON.stringify(user);
// console.log(userStringify);

// // 문자열을 객체로
// const userParse = JSON.parse(userStringify);
// console.log(userParse);



// const user = {
//     name : 'John',
//     age : 30
// };
// console.log(user);

// user.name = 'amy';
// console.log(user);

// user["age"] = 20;
// console.log(user);