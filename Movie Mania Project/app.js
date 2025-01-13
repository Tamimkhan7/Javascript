import { getmoviereviewdata } from "./data.js";
// console.log(getmoviereviewdata());
function init() {
    const moviereviesdata = getmoviereviewdata();
    paintstatistics(moviereviesdata);
    paintmoviedata(moviereviesdata);
    registerhandlers(moviereviesdata);
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

let sortDesc = false;

function paintmoviedata(movieReviewData) {
    const flatReviewData = movieReviewData.flat();
    //using sort function, but amar array ta akta object koto gula element na, se khette amar object niye compare kore sort korte hobe
    const Sorted = flatReviewData.toSorted((a, b) => b.on - a.on);//it's sorted at decending order and this sorting function will be sort at date object

    const movieListEL = document.querySelector("#movieListId UL");

    //    console.log(movieListEL);

    addreviewdata(movieListEL, Sorted);
}

function registerhandlers(moviereviesdata) {
    const sortBtn = document.getElementById("srtbtnid");
    const grpbtn = document.getElementById("grpid");


    sortBtn.addEventListener("click", () => sortbyreview(moviereviesdata));
    grpbtn.addEventListener("click", () => grpbtnbytitle(moviereviesdata));
}
function sortbyreview(moviereviesdata) {
    const flatReviewData = moviereviesdata.flat();

    sortDesc = !sortDesc; // true hole false and false hole true


    let sortreviewdata = sortDesc ? flatReviewData.toSorted((a, b) => b.rating - a.rating) : flatReviewData.toSorted((a, b) => a.rating - b.rating);

    const movieListEL = document.querySelector("#movieListId UL");
    removechildnodes(movieListEL);//firstly deleted all child node then added the addreviewdata funciton
    addreviewdata(movieListEL, sortreviewdata);

}



function grpbtnbytitle(moviereviesdata) {
    const flatReviewData = moviereviesdata.flat();
    const groupreviews = Object.groupBy(flatReviewData, ({ title }) => title); // grouping base of the title
    const titlekeys = Reflect.ownKeys(groupreviews);//ami aladara ader grouping kore pelci

    const movieListEL = document.querySelector("#movieListId UL");
    removechildnodes(movieListEL);//firstly deleted all child node then added the addreviewdata funciton

    //this function is called auto for loop as similar
    titlekeys.forEach((title) => {
        const liEl = document.createElement("li");
        liEl.classList.add("card", "my-2");

        const HEL = document.createElement("h2");
        HEL.classList.add("text-3xl");
        HEL.innerText = title;
        liEl.appendChild(HEL);

        movieListEL.appendChild(liEl);

        const reviews = groupreviews[title];
        console.log(title, reviews);

        reviews.forEach((review) => {

            const PEl = document.createElement("p");
            PEl.classList.add("mx-2", "my-2");

            const message = `<strong> ${review.by} </strong> has given <strong> ${review.rating} </strong> rating with a comment, <i> ${review.content}</i>`;
            PEl.innerHTML = message;

            liEl.appendChild(PEl);
        })
    })
}

function addreviewdata(movieListEL, Sorted) {
    Sorted.map((movie) => {
        //console.log(movie);

        const liElem = document.createElement("li");
        liElem.classList.add("card", "p-2", "my-2");

        const titleElem = document.createElement("p");
        titleElem.classList.add("text-xl", "mb-2");
        titleElem.innerText = `${movie.title} - ${movie.rating}`;
        liElem.appendChild(titleElem);

        const reviewElem = document.createElement("p");
        reviewElem.classList.add("mx-2", "mb-2");
        reviewElem.innerText = movie.content;
        liElem.appendChild(reviewElem);

        const byEleme = document.createElement("p");
        byEleme.classList.add("mx-2", "mb-2");
        byEleme.innerText = `By ${movie.by} on ${new Intl.DateTimeFormat('en-IN').format(movie.on)}`;
        liElem.appendChild(byEleme);

        movieListEL.appendChild(liElem);
    })
}


function removechildnodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


init();