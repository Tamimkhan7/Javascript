let fruits = "Apple";
console.log(`${fruits} is my favourite fruites, ${fruits} i like to eat.`);

var value = 20;//declear
var value = 50; //redeclear// redeclear are accepted into the javascript language
value = 100;//reassing //that is allowed 


console.log(value);

//var basically global scoped, reason var accessed having inside the bracket and outside the backedvar
var xy = 20;
xy = "50";
{
    var val = "bangladesh";
    console.log(xy);
}
console.log(val);

var country;//jokhn kono undefined variabel print korbo tokhn ai gula undefine dekhabe
console.log(country);


//javascript undefine value and undefined variable print korte pare

console.log(country);




///let variable

let vale = 20;
console.log(`value = ${vale}`);
//let didnot block scoped
let xp = 50;
{
    console.log(xp);
}
//let block ar bahire theke value print kora jay but block ar bitore declear kore bahire theke pirnt kora jay na 


//const variable
//const variable is fixed datatype doestn't change re value or re data type
const c = 1000;
// const c = 1000;//const cann't redeclear
// c = 5000;//const cann't reassain
console.log(c);


//const value change kora jay const object funciton niye

const person = {
    name: 'Tamimkhan',
    age: 25,
};
person.country = "bangladesh";
person.age = 50;
console.log(person);

//javascript hosting
tamim = 'amar name tamim khan';
console.log(tamim);
var tamim;

//but let and const is not hosnting varibale 


//normallily 
car('R15');
function car(bike) {
    console.log(`i love to have a ${bike}.`);
}