//guess the number function
function guessthenumber(difficulty) {
    let randomnumber;
    let attemps = 0;
    let maxattemps, range;

    switch (difficulty) {
        case 'easy':
            range = 10;
            maxattemps = 5;
            randomnumber = Math.floor(Math.random() * 10) + 1; //range 1-10
            console.log(randomnumber);
            break;
        case 'medium':
            range = 100;
            maxattemps = 7;
            randomnumber = Math.floor(Math.random() * 100) + 1; //range 1-100
            console.log(randomnumber);
            break;
        case 'hard':
            range = 1000;
            maxattemps = 10;
            randomnumber = Math.floor(Math.random() * 1000) + 1; //range 1-1000
            console.log(randomnumber);
            break;
        default:
            console.error("Invalid Difficulty level. Choose 'easy', 'medium' or 'hard'")
    }
    while (attemps < maxattemps) {
        let guess = parseInt(prompt(`Guess a number between 1 and ${range} (Inclusive). You have ${maxattemps - attemps} attemps left`));//prompt maddome akta value nibo and and oi number ta check korbo je number ta oi guess number kina
        attemps++;
        if (guess === randomnumber) {
            console.log('Congratulation! you guessed the number in', attemps, 'attemps');
            break;
        } else if (guess < randomnumber) {
            console.log('Too Small, Try Again');
        }
        else {
            console.log('Too large, Try Again');
        }
        //    console.log(guess);
    }
    if (attemps === maxattemps) {
        console.log('Sorry, you ran out of the attemps. The number was', randomnumber);
    }
}

//get user input defficulty
let difficulty = prompt('Choose difficulty (easy, medium, hard)').toLowerCase();
// console.log(difficulty);//for showing console
guessthenumber(difficulty);