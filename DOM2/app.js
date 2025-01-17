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