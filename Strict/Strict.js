// 'use strict';

//jodi ami variable ar name ta decleare na kori, ami jodi strict mode use kori tahole amake wrong dibe
// p = 'name';
// console.log(p);


//jodi strict mode use na kori tahole oi value ta gobal scrop hoye jay
// p = 'name';
// console.log(p);


//function ar khette
//ai khette ami wrong answer dibe, jodi strick mode off kore dei tahole aita correct dibe 
name(5, 6);
function name(x, y) {
    console.log(x, x);
}

//noramlly all of this correct, if i can use strick then he will wrong answer
name(5, 6);
function name(x, y) {
    console.log(x, y);
}