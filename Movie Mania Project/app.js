import { getmoviereviewdata } from "./data.js";
// console.log(getmoviereviewdata());
function init() {
    const moviereviesdata = getmoviereviewdata();
    paintstatistics(moviereviesdata);
    paintmoviedata(moviereviesdata);
}

function paintstatistics(moviereviesdata) {
    const flatreviewdata = moviereviesdata.flat();

    const totalmovies = moviereviesdata.length;
    const totalreviews = flatreviewdata.length;
    const totalrating = flatreviewdata.reduce((acc, item) => {
        return acc + item.rating;
    }, 0);
    const averagerating = (totalrating / totalreviews).toFixed(2);

    const totalmoviesE1 = document.getElementById("tmoviesId");
    addstat(totalmoviesE1, totalmovies);

    const averageratingEL = document.getElementById("taverageid");
    addstat(averageratingEL, averagerating);

    const totalreviewsEL = document.getElementById("treviewid");
    addstat(totalreviewsEL, totalreviews);
}

function addstat(elem, value) {
    const spanEL = document.createElement("span");
    spanEL.classList.add("text-6xl");
    spanEL.innerText = value;
    elem.appendChild(spanEL);
}

function paintmoviedata(moviereviesdata) {
    const flatreviewdata = moviereviesdata.flat();
    const movielistEl = document.querySelector("#Movielistid UL"); //aite diye ami amar ul ta dorlam

    // console.log(movielistEl);

    flatreviewdata.map((movie) => {
        const liElem = document.createElement("li");
        liElem.classList.add("card", "my - 2", "p - 2");

        const titleElem = document.createElement("p");
        titleElem.classList.add("text-xl", "mb-2");
        titleElem.innerText = `${movie.title} - ${movie.rating}`;
        liElem.appendChild(titleElem);
        movielistEl.appendChild(liElem);
    })


}
init();