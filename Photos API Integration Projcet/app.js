const imgcontainer = document.querySelector('#image-container');
const urlAPI = 'https://picsum.photos/v2/list';


//how to find photo from API useing fetch funciton
const getphoto = () => {
    fetch(urlAPI).then(data => data.json()).then(item => {
        //console.log(item);
        item.forEach(function (photoobject) {
            const newcontainer = document.createElement('div');
            newcontainer.classList.add('image-container-item');
            // ami akta img tag create korlam then oitay amar img tag ar url ta insert kore dilam
            const newimg = document.createElement('img');
            newimg.src = photoobject.download_url;
            newcontainer.appendChild(newimg);

            //and now we are create p tag for wrtie something then we will insert it author name
            const newauthor = document.createElement('p');
            newauthor.textContent = photoobject.author;
            // amra newcontainer div ar modder newauthor div ke inclue korteci
            newcontainer.appendChild(newauthor);

            //finally we include of the newcontainer div into the imgcontainer div
            imgcontainer.appendChild(newcontainer);



        })
    })
}

getphoto();