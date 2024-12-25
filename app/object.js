//javascript object
// javascript object are two type, this is called object litarates
//const object hisabe neoya onek tai better karon aita const hisab thake

//Symbol create
const newsymb = Symbol('key1');
const mobilemodel = {
    // key : value
    // key always string hold kore rakhe
    brand: 'Samsung',
    model: 's24 Ultra',
    processor: 'Sanddragon gen 3',
    camera: ['200mp', '12mp', '12mp'],
    haszonecamera: true,
    'Selfie Camera MP': 12,
    [newsymb]: 'Mykey1',
    bandmodel: function () {
        return `Mobile brand is ${this.brand} and model is ${this.model}`;
    },
    battery: {
        mah: 5000, //we are store here battery capacity
    },
};
mobilemodel.model = 's25 ultra';
// jodi ami freeze kora rakhte cai amar object ar kono change na korte cai tahole
Object.freeze(mobilemodel);
console.log(mobilemodel.model);

// key jehetu string hold kore tai bracket akare neoya tai better,, . diye neoya jay but aker odik string char jonno aita applicable na
console.log(mobilemodel['brand']);
console.log(mobilemodel[newsymb]);//jehetu symbol already string hisabe neoya ace, tai extra kore string keyword deoya lagtece na



// check if model key present in the object

console.log(mobilemodel.hasOwnProperty('camera'));

// value or key jodi array akare dekhte cai tahole:-
console.log(Object.keys(mobilemodel));

// value gula array akare dekhte caile
console.log(Object.values(mobilemodel));

// method ba funciton ke ai vabe call deoya jay
console.log(mobilemodel.bandmodel());


// create multiple object and store one object

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
const obj2 = {
    p: 6,
    q: 7,
    r: 8,
};

const obj3 = {
    x: 10,
    y: 11,
    z: 12,
};

const finalobj = {
    obj1, obj2, obj3,
};
console.log(finalobj);

// multiple object jodi ak line a print korte cai  
// this is not efficient, because, first of all are store on the obj1 then obj1 return all value on the console
// const objfinal = Object.assign(obj1, obj2, obj3);

// this time we do now work 
// const objfinal = Object.assign({}, obj1, obj2, obj3);

//  efficient way to store the value on the finalobj, it is best from above all structure
const objfinal = { ...obj1, ...obj2, ...obj3 };
console.log(objfinal);

//how to print object between object value
console.log(mobilemodel.battery.mah);



// constructor function
// constructor function, function ar name first char is must be capital letter
function Person(first, last) {
    this.firstname = first, this.lastname = last;
}
// both are correct we through a value into the paranthesis or parameter
// const person2 = new Person();
// console.log(person2);
const person1 = new Person('Tamim', 'khan');
person1.age = 20;//added an element on the Person1 object
console.log(person1);