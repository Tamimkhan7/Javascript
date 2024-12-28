let name = "Tamim khan"
// let information = "My Name is " + name + " khan";
// console.log(information);
// document.getElementById('title').innerText = information;

// string to Object

const name2 = new String("Tamim");
console.log(name2);
if (name2 === name) console.log(true);
else console.log(false);


// string function

console.log(name.charAt(0));
console.log(name.indexOf('m'));//m first position of the name string 
console.log(name.toUpperCase());//lowercase diye all char lowarcase kore peli and touppercase diye sob uppercase kore peli


// slice and substring both functin are structure same
//slice bascially negative index access korte pare but substring negative index access korte pare na
console.log(name.slice(6));
console.log(name.substring(6));


let sometext = "                 TEXTOFSOME              ";
console.log(sometext.trim());//font and back side a space deleted korar jonno trim use kora hoy
console.log(sometext.trimStart());//tahole font a space deleted hoye jabe but backside a kono space deletd hobe na
console.log(sometext.trimEnd())//tahoe backside ar space gula deleted hoye jabe but font ar kono space  delete hobe na

const url = "https://ali.com/new%20Blog";
console.log(url.replace("%20", "-"));//replace diye kono spefices a kono positon ar char ba string change kora jay


// string to array convertation
console.log(name.split(" "));