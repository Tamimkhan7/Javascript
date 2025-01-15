//queryselector diye ami basically amar h1 tag ke select korci then oi h1 tag a jei text ta cilo oita change kore dici
// document.querySelector('h1').innerText = 'Subscribe';

// // innertext, textcontent and innerHTML modde ki distance ace oi gula akhn dekhte pabo
// document.querySelector('h1').innerText;
// //welcome printed,, because ai tag modde ja ace just oi gulaii dekhabe
// document.querySelector('h1').textContent;
// // welcome Tamim ,,, because textcontent diye ami oi h1 tag modde ja ace sob niye asbo, ar modde jodi kono subtag thake oi gulaoh anbo
// document.querySelector('h1').innerHTML;
// //ai tag basically sob niye asbe html tag soho, everything se find kore nibe



const box = document.querySelector('.classbox');
box.style.backgroundColor = 'red';
box.style.height = '100px';
box.style.width = '100px';

// getelementbyid dore amra akta id seleted korte pari
document.getElementById('box').style.backgroundColor = 'blue';


//ami kivabe multiple item ke seleted korbo ta dekhbo
const menuItem = document.querySelectorAll('a');//amar onek gula link cilo sob gulai ami selected kore pelci
// menuItem[1].style.color = 'red';


//how to use foreach function on the html any tag of the multiple time

menuItem.forEach(function (a_color) {
    a_color.style.color = 'red';
    a_color.style.fontSize = '24px';

});


const cusclass = document.getElementsByClassName('Nav_link');

//converted to the array of the link in the html

const convertclass = Array.from(cusclass);

// how to print this array value
// for (let i = 0; i < cusclass.length; i++){
//     console.log(cusclass[i]);
// }

convertclass.forEach(function (value) {
    value.style.backgroundColor = '#262626';
    value.style.margin = '0 0 15px';
    value.style.padding = '15px 15px';
})


//how to check class box or class id
document.querySelector('.classbox').id;