const mydate = new Date();
//but both are same and result are same, just formate is different
console.log(mydate);
console.log(mydate.toString());//tostring method use korar fole normally jei vabe dekhay oi vabe ai dekhacce
console.log(mydate.toDateString());//todatestring basically date niye kaj kore time dekhay na
//day ta jodi full format dekhate cai tahole use korte pari
console.log(
    mydate.toLocaleString('default', { weekday: 'long' })
);

// update time and date 
let updatedate = new Date(2024, 3, 12);
let updatedate2 = new Date(2024, 3, 12, 2, 30, 25, 32);
// date customization
let datecustom = new Date('10-06-1997');
console.log(datecustom);



// function simpletask() {
//     for (let i = 0; i < 10; i++)console.log('Walking time of each step');
// }
// //find out how need use of this funciton 

// let starttime = Date.now();
// simpletask();
// let endtime = Date.now();
// console.log(`The task took ${endtime - starttime} milisecond to complete`);


//find day and date
// console.log(myDate.getDate());
// console.log(myDate.getDate());


/*
call stack
premitive data type
strign , number, boolean, undefined, null, symbol, bigint

Heap
non premitive data type
object, array
*/

// swich case
let category = 'motor bike';
let cartype;
switch (category) {
    case 'car':
        cartype = 'This is a car';
        break;
    case 'motor bike':
        cartype = 'This is a motor bike';
        break;
    default:
        cartype = 'Unknown vchicle category';
}
console.log(cartype);