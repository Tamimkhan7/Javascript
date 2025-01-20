const quoteelement = document.querySelector('#quote');
const authorelement = document.querySelector('#author');
const button = document.querySelector('#button');

const APIurl = 'https://api.api-ninjas.com/v1/quotes';
const APIkey = 'js6ZJ/z93pV7DWxzUBYo6w==FmTDtx1gIMIuKx8B';

//calling arrow function for generated data from API
const getquote = () => {
    //fetch kore ami data anteci from API and APIurl theke taoh bole dicci
    fetch(APIurl, {
        headers: { 'X-Api-Key': APIkey },
        //rakhbo ami jason file a 
    }).then(data => data.json()).then(item => {
        // console.log(item);
        quoteelement.textContent = item[0].quote;
        authorelement.textContent = item[0].author;
    }).catch(error => {
        console.error('Error fatching quotes', error);
    });
    //if we find any error that's time we need help of the API

};
getquote();
button.addEventListener('click', getquote);