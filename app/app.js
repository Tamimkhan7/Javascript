// function
// function ok() {
//     console.log("my name is tamim khan");
// }
// ok();

// // parameter pass function

function myfun(name) {
    console.log('My name is ' + name);
}
myfun("Tamim");


// function is_subscribed() {
//     console.log("Subscribed");
// }
// document.getElementById('btw').addEventListener('click', is_subscribed);


// auto function, ja nije nije call hoy

// (function (message) {
//     console.log('My name is', message);
// })('Hello'); 


// math function,,,aitake bole function expression

let maths = function (x, y) {
    return x * y;
}
console.log(maths(4, 6));


//function

let numbers = [5, 6, 7, 8];
let sqnum = numbers.map(function (num) {
    return num * num;
});
console.log(sqnum);



/* just normal function
let add = function (x, y) {
    return x + y;
    }
    console.log(add(5, 10));*/
// arrow function
let add = (x, y) => x + y;
console.log(add(10, 20));

// nested function
function greet(name) {
    function sayhello() {
        alert('Hello' + name);
    }
    return sayhello();
}
greet('Tamim');