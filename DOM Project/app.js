const body = document.getElementById("body");
const button = document.querySelectorAll("li");

// const red_color = document.querySelector('.red');
// red_color.addEventListener('click', function () {
//     body.style.backgroundColor = '#e74c3c';
// })

// const green_color = document.querySelector('.green');
// green_color.addEventListener('click', function () {
//     body.style.backgroundColor = '#27ae60';
// })

button.forEach(function (value) {
    value.addEventListener("click", function () {
        // both are working here, don't worry what is you use
        let classname = this.classList.value;
        // let classname = this.classList[0];
        // console.log(classname);
        let color = "";
        
        if (classname === "red") color = '#e74c3c';
        else if (classname === "green") color = '#27ae60';
        else if (classname === 'blue') color = '#3498db';
        else if (classname === 'pink') color = '#1abc9c';
        else if (classname === 'purple') color = '#9b59b6';
        body.style.backgroundColor = color;
    });
});
