function subscribe() {
    document.getElementById('text').innerHTML = 'Subscribed';
    document.getElementById('btw').innerHTML = 'Subscribed';
    document.getElementById('btw').style.backgroundColor = '#262626';
}
function like() {
    document.getElementById('like').innerHTML =
        '<i class="fa-solid fa-thumbs-up" ></i> Liked';

}

function keyPress() {
    document.getElementById('text').innerHTML = 'Key Pressed!';
}

// function onload() {
//     // alert('Alert on the screen');
//     document.getElementById('text').innerHTML = 'Website Loaded Properly';
// }


// function windowsresize() {
//     document.getElementById('textarea').style.height = '100px';
//     document.getElementById('form').style.fontFamily = 'Courier New';
// }


// function onscrolling() {
//     document.getElementById('text').innerHTML = 'Scrolling';
// }


// arh easily kivabe kora jay oita use korbo
// document.getElementById('btw').onclick = function () {
//     document.getElementById('btw').innerHTML = 'Subscribed';
// }
// addEventListener basically amar screen sob kicu memorization kore rakhe, se buje rakhe konta por konta kaj korteci
// function ar modde jokhn value dici tokhn amar just e dici ar mane holo
document.getElementById('btw').addEventListener('click', function (e) {
    document.getElementById('btw').innerHTML = 'Subscribed';
    // true false bepar ta holo even bubling and even captaring
}, false);

document.getElementById('ul').addEventListener('click', function (e) {
    console.log("Ul clicked");

}, true);

document.getElementById('li').addEventListener('click', function (e) {
    console.log("LI clicked");

}, true);

// jodi amra false kore rakhi tahole amader pore function ar result age dekhabe then first function ar result dekhabe
// basically ai vabe kaj korbe
// arh jodi true kore rakhi then first ar value first and second ar value second a kaj korbe


