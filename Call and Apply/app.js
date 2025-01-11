const greeline = {
    bus: 'Green Line',
    BCode: 'GL',
    Ticket: [],
    book(setnum, name) {
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.BCode}-${setnum}`);
        this.Ticket.push({ TicketInfo: `${this.BCode}-${setnum}`, name });
    },

};
greeline.book('C1', 'Tamim khan');
greeline.book('C3', 'Rakib khan');
console.log(greeline);

const shohag = {
    bus: 'Shohag Paribahan',
    BCode: 'SH',
    Ticket: [],
};
const Book = greeline.book;
Book.call(shohag, 'D1', 'Habib khan');
Book.call(shohag, 'E2', 'Hanif khan');


const Hanif = {
    bus: 'Hanif Paribahan',
    BCode: 'SH',
    Ticket: [],
};

Book.call(Hanif, 'E2', 'Noman khan');

//how to use Apply function in the function

Book.apply(Hanif, ['A3', 'Imran']);
