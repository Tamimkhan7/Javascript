let car = ['BMW', 'volvo', 'Toyota', 'Ford', 'Tesla'];
for (let i = 0; i < car.length; i++) {
    console.log(car[i]);
    // console.log("\n");
}

// for in loop
let person = {
    name: 'Tamim',
    age: 20,
    Country: 'Bangladesh',
};
for (let i in person) {
    //first char is uppercase 
    let capletter = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capletter + ": " + person[i]);
}