const randomQuotes = [
    {
        quote: 'Quality is not an act, it is a habit',
        author: 'Aristotle',
    },
    {
        quote: 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
        author: 'Norman Vincent Peale',
    },
    {
        quote: 'Life is 10% what happens to you and 90% how you react to it.',
        author: 'Charles R. Swindoll',
    },
    {
        quote: 'If you are going through hell, keep going.',
        author: 'Winston Churchill',
    },
    {
        quote: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
        author: 'Samuel Beckett',
    },
    {
        quote: 'With the new day comes new strength and new thoughts.',
        author: 'Eleanor Roosevelt',
    },
];

const quoteelement = document.querySelector('#quote');
const authorelement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoquote() {
    // quoteelement.textContent = randomQuote[2];
    let index = Math.floor(Math.random() * randomQuotes.length);//create random index for the randomquote
    quoteelement.textContent = randomQuotes[index].quote;
    authorelement.textContent = randomQuotes[index].author;
}
//but ai khane main problem holo ami kono author name dite parci na,,, normally ami cai author name oh dite
autoquote(); //normally se akta code generated kore rakhbe and seta randomly and seta refresh dile change hoye jabe
button.addEventListener('click', autoquote); //abar button a click korle akta random code diye dibe 

