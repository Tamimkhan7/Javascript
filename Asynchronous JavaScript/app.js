//introduction to async javascript

// const { reject } = require("any-promise");
// const { contains } = require("micromatch");
// const { resolve } = require("path");

/*
?  synchoronous  //sequences maintain kore
? single threaded // first ar ta first kaj kore and last ta last a kaj kore and cd ta cd kore then main funciton a pathay print kore
*/

//normal function

// function a() {
//     console.log('a');
// }
// console.log('End');
// a();

//using time function
//this function woring syncnronous way
// const a = function () {
//     console.log('Function Working');
//     let aTime = new Date().getTime();
//     //it's call 5s that's means 5000 millisecond waited my loop then executed
//     while (aTime + 5000 >= new Date().getTime())
//         console.log('Completed');
// };
// console.log("First Line");
// a();
// console.log("last line");

//asyncnronous javascript

/*
 *setTimeout //ai gula paile sorasori console a na pathie size bar a pathay then sei khane executed kore
 *setInterval //ai gula paile sorasori console a na pathie size bar a pathay then sei khane executed kore
 *promises
 *fetch
 *axios
 *XMLHttpRecquest
 */

//bascially ai sob function asyncnronous way te kaj kore

// console.log("Hello");
// console.log("Hello2");
// //settimeout(callback, timeinms)//callback means a function and timeinms means a how much time needed for this function executed

// setTimeout(() => {
//     console.log("Hello3");
// }, 5000);
// console.log("Hello4");
// console.log("Hello5");
/*
Hello
Hello2
Hello4
Hello5
Hello3 last a giye aita print korbe because this is asyncnronous function*/

//how do work promise function

// let coffee = new Promise((resolve, reject) => {
//     if (true) return resolve();
//     else return reject();
// });
// coffee.then(function () {
//     /*
//     The then() method provides two callbacks:
//     One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.
//     */
//     console.log("Resolved");
// }).catch(function () {
//     //The catch statement defines a code block to handle any error.
//     console.log('Rejected');
// });

//another example of the promise function

// let mathans = new Promise((resolve, reject) => {
//     let n = Math.floor(Math.random() * 10);
//     if (n < 5) return resolve();
//     else return reject();
// });

// mathans.then(function () {
//     console.log("The number is below of the 5");
// }).catch(function () {
//     console.log("The number is above of the 5");
// })


//multiple promise we can use our js console at a time, now we can seee

// const step1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //i'm return resolve function for the print out after 2s
//         resolve("Step one is done");
//     }, 2000);
// });

// const step2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step two is done");
//     }, 3000);
// });

// step1.then(function (resolve) {
//     console.log(resolve);
// })

// step2.then(function (resolve) {
//     console.log(resolve);
// })

//promise function ke kivabe array moto output ber kora jay ta dekhbo
// Promise.all([step1, step2]).then(res => console.log(res));
//race mane holo jeita time kom deoya ace oita age kaj hobe then bakita kaj hobe,,, race kore jeita first hobe oita asbe just sudu
// Promise.race([step1, step2]).then(res => console.log(res));

//ami promise ar modde one by one kaj korate pari function ke 

// let promise1 = new Promise((resolve, reject) => {
//     return resolve('Step one done');
// });

// let promise2 = promise1.then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//         return resolve('step two is done');
//     });
// })

// promise2.then(function (data) {
//     console.log(data);
// });


//fetch part we will learn currently

// function randomuser() {
//     fetch(`https://randomuser.me/api/`).then(function (raw) {
//         return raw.json();//converting data into the json
//     }).then(function (data) {
//         console.log(data);
//     }).catch(function () {
//         //if we find any wrong vardict
//         console.log("No data found");
//     });
// }
// randomuser();



//jodi amra just async likhi funciton ar age tahole aii pura function ta promise akare thake, oi vabe structure kora hoye jay
//two ta function ai same kaj kore just amar structure change hocce,, karon two ta function ai hello return kortece promise akare
async function myfunction() {
    return 'Hello';
}
// console.log(myfunction());

function myfunction() {
    return Promise.resolve('Hello');
}
// console.log(myfunction());

// if we write just async they converted asynchronous javascript, is too small and fast

async function randomuser() {
    let urlAPI = await fetch(`https://randomuser.me/api/`);
    let rawdata = await urlAPI.json(); //jddi ami await use na kori tahole basically directly data ta provide kore se wait ar kore na, ja pai tai console a diye dey
   // console.log(rawdata);

    console.log(`${rawdata.results[0].name.title} ${rawdata.results[0].name.first} ${rawdata.results[0].name.last}`)
    console.log(`${rawdata.results[0].gender}`);
    console.log(`${rawdata.results[0].location.country}`);
}
randomuser();