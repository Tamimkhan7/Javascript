// IIFE --- full form :- Immediately Invoked Function Expression (IIFE)


const afunction = function (a, b) {
    console.log(`A simple Mathmatical equation result is ${a + b}`);
};
//we can use multiple time, but IIFE funciton we can use one time
afunction(5, 10);
afunction(15, 17);

//that is doesn't use multiple time
// amra jodi aker odik bar IIFE nite cai tahole amra akta IIFE funciton complete korar por then amra oita function take semicolon diye complete kore nibo
(function (a, b) {
    console.log(`A simple IIFE Mathmatical equation result is ${a + b}`);
})(10, 9);

//how to double or multiple time take IIFE function from user

((a, b) => {
    console.log(a * b);
})(5, 9);

// function () {
//     const h3 = document.querySelector('.h3');
//     const h4 = document.querySelector('.h4');
//     h3.style.backgroundColor = 'red';
//     h4.style.backgroundColor = 'yellow';
// }

//it like right now is global variable, we can access any where,, that's time we were uses IIFE funciton
//aita onek valo globally use korar theke
// (
//     function () {
//         const h3 = document.querySelector('.h3');
//         const h4 = document.querySelector('.h4');
//         h3.style.backgroundColor = 'red';
//         h4.style.backgroundColor = 'yellow';
//     }
// )();


//amra kivabe IIFE function ke globally access korte pari ta dekhbo akhn

const bymodule = (
    function () {
        let parvar = "This is a Private Varibale";
        function parfunc() {
            console.log("This is a Private Function");
        }
        return {
            pubvar: "This is a public varibale",
            publicmethod: function () {
                //we can access of the  private funciton using return funtion
                parfunc(); //this is actievly work
                console.log("This is a public Method");
            },
        };
    })();

// console.log(bymodule.parvar); // is it not accessible
//console.log(bymodule.parfunc()); // is it not accessible
console.log(bymodule.pubvar); //is it accessible
console.log(bymodule.publicmethod());
