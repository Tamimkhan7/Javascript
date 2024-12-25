//javascript arrays
const lag = ['HTML', 'CSS', 'Javascript', 'PHP', true, 10];

console.log(lag[3]);//print 4th index value, javascript is 0 index base ,starting index is 0
// change 3 index value 
// lag[2] = 'C#';


// array convert into the string
console.log(lag);
// last element delete from array we can use pop function
lag.pop();
// when we can add an element into array we can use push function
lag.push(1000);


// added value on the begin of the array using unshift funciton
lag.unshift('abs');
// delete first elemet on the arry using shift function
lag.shift();
console.log(lag);

// console.log(lag.toString());//convert array into string
// //used join method
// console.log(lag.join(' $ '))
// console.log(typeof lag);

// //find array lenth
// console.log(lag.length);


// array concanation
const x = [1, 2, 3, 4];
const y = [2, 4, 5, 8, 9];
const z = [9, 8, 7, 5, 6, 1];
const p = x.concat(y, z);
console.log(p);




// added element on the array using splice function
lag.splice(2, 0, 'Angular', 'Vue,js');
// delete element on the array using splice function
lag.splice(0, 2);
console.log(lag);

