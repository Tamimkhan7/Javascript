const greeline = {
    bus: 'Green Line',
    BCode: 'GL',
    Ticket: [],
    book(setnum, name) {
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.BCode}-${setnum}`);
        this.Ticket.push({ TicketInfo: `${this.BCode}-${setnum}`, name });
    },

};
// greeline.book('C1', 'Tamim khan');
greeline.book('C3', 'Rakib khan');
console.log(greeline);

const shohag = {
    bus: 'Shohag Paribahan',
    BCode: 'SH',
    Ticket: [],
};
const Book = greeline.book;
// Book.call(shohag, 'D1', 'Habib khan');
Book.call(shohag, 'E2', 'Hanif khan');


const Hanif = {
    bus: 'Hanif Paribahan',
    BCode: 'SH',
    Ticket: [],
};

Book.call(Hanif, 'E2', 'Noman khan');

//how to use Apply function in the function

Book.apply(Hanif, ['A3', 'Imran']);



// how to use bind function in the two function
// amra jokhn funciton niye kaj korbo tokhn basically bind method use korbo otherwise call method use  korbo jodi amra array niye kaj kori tahole amra apply method use korbo
// bind function a pre define kore rakha jay
const ticketSH = Book.bind(shohag);
ticketSH('E2', 'Hannan khan');

const ticketSH2 = Book.bind(Hanif, 'E3');
ticketSH2('Mannan khan');


// using object into the method and use bind method

// const person = {
//     firstName: "Tamim",
//     lastName: "khan",
//     display: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// const output = person.display();
// console.log(output);



const person = {
    firstName: "Tamim",
    lastName: "khan",
    display: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
}
const output = person.display;
console.log(setTimeout(output.bind(person), 2000));


// partial application example

const addTax = (rate, value) => value + (value * rate) / 100;
console.log(addTax(10, 100));

const addVAT = addTax.bind(null, 15);
console.log(addVAT(100));