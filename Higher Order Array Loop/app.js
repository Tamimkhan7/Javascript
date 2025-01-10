const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];
for (const x of fruits) console.log(x);//auto didnot work here

// how to take map from user and define value of the map
const country = new Map([
    ['Bd', 'Bangladesh'],
    ['In', 'India'],
    ['Pk', 'Pakistan'],
    ['Np', 'Nepal'],
]);
//included another value in the map
country.set('Bu', 'Bhutan');

for (const [key, value] of country) console.log(key, ':', value);

//map value used in object and print it
const mycountry = {
    Bd: 'Bangladesh',
    In: 'India',
    Pk: 'Pakistan',
    Np: 'Nepal',
};
//used for in loop and print of all of object value
for (const key in mycountry)
    console.log(key, ':', mycountry[key]);

// for (const key in fruits) {
//     console.log(key, ':', fruits[key]);
// }

// how to use for each loop
// no need uses any function name
fruits.forEach(function (value) {
    console.log(value);
});


// how to print value and index using foreach loop
fruits.forEach((value, index) => {
    console.log(value, index);
});

//array object

const arrayobject = [{
    name: 'MERN Stack',
    Property: 'Mongo, Express, React, Node',
}, {
    name: 'Laravel',
    Property: 'Javascript, Vue, PHP, Laravel, MySQL',
}, {
    name: 'WordPress',
    Property: 'Javascript, PHP, WordPress, MySQL',
},];
arrayobject.forEach(info => {
    console.log(`Want to learn ${info.name} learn this ${info.Property}`);
})