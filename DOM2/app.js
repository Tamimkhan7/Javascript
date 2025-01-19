let headtitle = document.querySelector('h1');
// ai khette amar full title ta change hoye amar new title cole asce
// headtitle.innerText = 'Tamim khan';
//but ami jodi amar ager title ta rekhe new akta title add kore and aita pase thakbe tokhn ki hobe

//this is called concanating
headtitle.innerText = headtitle.innerText + ' World';

//change all boxes text

let boxes = document.querySelectorAll('.box');
//but amar jodi onek gula box thake sei khette to ai vabe change kora possible na tar jonno amar basically loop use kora lagbe
boxes[0].innerText = 'New Text';
boxes[1].innerText = 'New Text';

let increment = 1;
for (box of boxes) {
    box.innerText = `Box No - ${increment}`;
    increment++;
}

// create Element
//how to add a button using javascript,,, kicu add korte caile createelement use korte hoy

let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';//oi button ar modde ki likhbo ta likhe dilam
//kon jaygay ai button ta rakhbo oita set korteci
let heroarea = document.querySelector('.hero');
//append mane holo ai button ta ami hero class ar nice add korbo
heroarea.append(learnBtn);
// //jodi ami upore add korte cai tokhn ki korbo, tokhn basically ami prepend use korbo
// heroarea.prepend(learnBtn);
// //jodi ami hero class ar upore oi button ta add korte cai tahole amr add korte hobe before
// heroarea.after(learnBtn);
// //jodi ami hero class ar nice ai button ta add korte cai tahole ami add korte pari after
// heroarea.before(learnBtn);



//add element or add item
//but this is not optimized code, we can create an optimized code
function addFruits(namefruits) {
    const additem = document.createElement('li');//element add korte createelement use korte hoy
    additem.innerHTML = `${namefruits}`; //jei element ta create korci oitar name dilem, hoyto input or added text
    //kon jaygay add korbo oita selectd korlam and ki add korbo ta bole dilam    
    document.querySelector('ul').appendChild(additem);
}
//akhn just function call korbo
// addFruits('Mango');
// addFruits('Graps');

//optimized code

function addFruitsop(namefruits) {
    const additems = document.createElement('li');
    additems.appendChild(document.createTextNode(namefruits));
    //kar age ba pore add korbo ta bole dilam
    document.querySelector('ul').appendChild(additems);
}

addFruitsop('Mango');
addFruitsop('Graps');


//edit,,, how to change my element value
//ami li ke dorlam and oitar first child ke mention korlam
const editfruits = document.querySelector('li:first-child');
//and first child ke ami innerhtml diye change kore dilam
// editfruits.innerHTML = 'Blueberry';

//textcontest diye oh text change kora jay ,, same kaj korbe as like innerhtml
// editfruits.textContent = 'Strawberry';
//it's more easy innerhtml or textcontent
//ami replacewith diye same kaj ta korte pari as like innerhtml or textontent

const newfruits = document.createElement('li');
newfruits.textContent = 'Strawberrys';
editfruits.replaceWith(newfruits);


//edit with tag,
// amra kivabe tag soho change korbo
//ami last fruits ta ke delete kore or jaygay akta tag soho value add kore dici

const edittag = document.querySelector('li:last-child');
//outerhtml diye ami pura oi tag take change kora jay and oi tag  a onno kono tag use kora jay
// edittag.outerHTML = '<p>Lemon</p>';

// how to remove at any element use remove method 
edittag.remove(); // last li  remove hoye gece just use korci remove function