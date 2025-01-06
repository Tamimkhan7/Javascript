// this keyword bascially method call kore object ke 
// and function call kore global ba window ke

'use strict';
// console.log(this);
var firstname = 'Tamim';

function myfunctin() {
    // return this;
}
console.log(myfunctin());

const myfunc = () => {
    console.log(this);
}
myfunc();



const mybtn = document.querySelector('button');
mybtn.addEventListener('click', function () {
    console.log(this);
})

//ami jodi let niye global kaj kori taoh amar this funciton khuje pabe na, o just var variable ar value gulaii khuje pabe
var fname = 'Tamim khan';
const student = {
    fname: 'Tamim',
    sinfo: function () {
        return `${this.fname} loves to read`;
    },
    arrowfunction: () => {
        return `${this.fname} loves to read`;
    },
};

console.log(student.sinfo());//aita jehetu method tai aita identified korte partece
console.log(student.arrowfunction());//jehetu  aita funciton ai jonno object ar value identified korte parce na
/*
method object ke reffer kore and funciton window or global ke reffer kore
method =>object
function => window/ global
*/

//how to bind of the using this keyword

const game = {
    gname: 'NFS',
    gInfo: function () {
        console.log(`Love to play ${this.gname}`);
    },
}

const aGame = {
    gname: 'Car Game',
};
const bindgame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindgame());