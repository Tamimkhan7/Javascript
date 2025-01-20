let height = document.getElementById('Height');
let weight = document.getElementById('Weight');
let button = document.getElementById('button');
let Score = document.getElementById('Score');
let result = document.querySelector('.result');

button.addEventListener('click', function () {
    // let newheight = height.value; //is it provided us as string value but we needed as integer value, that's why we convert it
    let newheight = parseFloat(height.value);
    let newweight = parseFloat(weight.value);
    //convert into the meter from the centi meter
    newheight = newheight / 100;
    let sqrheight = newheight * newheight;
    let bmi = newweight / sqrheight;
    // console.log(bmi.toFixed(2));
    Score.textContent = bmi.toFixed(2);
    result.style.display = 'block'; //normally aita display none thakbe jokhn amra click korbo tokhn aita display te dekhabe
    if (Score.textContent < 18.6) Score.style.background = '#f9ca24';
    else if (Score.textContent < 24.9) Score.style.background = '#00FF00';
    else Score.style.background = '#d63031';
});

let form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});