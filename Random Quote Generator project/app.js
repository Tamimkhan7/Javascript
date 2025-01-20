const randomQuote = [
    'Quality is not an act, it is a habit',
    'Believe in yourself! Have faith in your abilities without a  humble but reasonable confidence in your own powers you cannot be successful or happy',
    'Life is 10% what happens to you and 90% how you react to it',
    'If you are going through hell, keep going.',
    'Every tried, Ever failed. No matter. Try Again. Fail again. Fail better.',
    'With the new day comes new strength and new thoughts.',
];

const quoteelement = document.querySelector('#quote');
const authorelement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoquote() {
    // quoteelement.textContent = randomQuote[2];
    let index = Math.floor(Math.random() * randomQuote.length);//create random index for the randomquote
    quoteelement.textContent = randomQuote[index];
}
//but ai khane main problem holo ami kono author name dite parci na,,, normally ami cai author name oh dite
autoquote(); //normally se akta code generated kore rakhbe and seta randomly and seta refresh dile change hoye jabe
button.addEventListener('click', autoquote); //abar button a click korle akta random code diye dibe 

