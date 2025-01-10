const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

// customization and check each of the length
const fruitcapB = fruits.filter(fruit => fruit.toLocaleLowerCase().startsWith('b'));
console.log(fruitcapB);//first char is b and it's capital letter 
const fruitlen5 = fruits.filter(fruit => fruit.length == 5);
console.log(fruitlen5);
//which value are include 'g' that are we printed
const fruitincludewithg = fruits.filter(fruit => fruit.toLocaleLowerCase().includes('g'));
console.log(fruitincludewithg);

//using map and every element added 5
const number = [1, 2, 3, 4, 5, 6, 7];
console.log(number);

const mynum = number.map(num => num + 5);//if i wanted i added 10 or something at every element
console.log(mynum);


//how to use reduce function in the array or object
const arrayobject = [{
    name: 'MERN Stack',
    Property: 'Mongo, Express, React, Node',
    price: 5000,
}, {
    name: 'Laravel',
    Property: 'Javascript, Vue, PHP, Laravel, MySQL',
    price: 5500,

}, {
    name: 'WordPress',
    Property: 'Javascript, PHP, WordPress, MySQL',
    price: 4000,
},];

const courseprice = arrayobject.reduce((acc, course) => acc + course.price, 0);
console.log(courseprice);