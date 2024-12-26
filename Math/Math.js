// let num = 30.256235653;
// // if needed round number we can use round function
// console.log(Math.round(num));

// // find minimum value in the array
// console.log(Math.min(2, 1, 8, 0, 3, 4));
// // find maximum value in the array
// console.log(Math.max(2, 1, 8, 0, 3, 4));
// // find PI value using PI funciton
// console.log(Math.PI);
// // find sin and cos value using degree function
// console.log(Math.cos(90 * Math.PI) / 180);
// find random number 
// tofixed use kora ami point a pore koy ghor rakhte cai oita bole dite pari
// // console.log(Math.random().toFixed(2) * 10 + 1);

// // ludu apps create
// let uppervalue = 6;
// let lowervalue = 1;
// let result = Math.floor(Math.random() * uppervalue + 1);
// console.log(result);


function rolldice() {
    let rannum = Math.floor(Math.random() * 6) + 1;
    let imgsource = 'image/' + rannum + '.png';
    document.getElementById('ludu').src = imgsource;
}