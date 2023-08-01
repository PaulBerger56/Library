let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary(book) {
    if(!isInLibrary(book)){
        myLibrary.push(book);
    }
};

function isInLibrary(book) {
    for(let value of myLibrary) {
        if(value.title === book.title) {
            return true;
        }
    }
    return false;
};

function removeBook(title) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === title) {
            myLibrary.splice(i,1);
        }
    }
};

function hidePopUp() {
    bookAdditionCard.style.display = 'none';
};


// Temporary books to show on the page
let bookOne = new Book("Rain in Spain", "Writerino", 50, false);
myLibrary.push(bookOne);

let bookTwo = new Book("Save the drama for yo mamma", "You know who", 15, true);
myLibrary.push(bookTwo);



// Adds the books to the cards on the page whenever the array is updated

const cardArea = document.querySelector(".card-container");

myLibrary.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('card')

    const title = document.createElement('div');
    title.classList.add('title')
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = book.pages + " pages";
    bookCard.appendChild(pages);

    const read = document.createElement('div');
    read.classList.add('read');
    if(book.isRead){
        read.textContent = "Has been read"
    } else {
        read.textContent = "Not yet read"
    }
    bookCard.appendChild(read);

    const remove = document.createElement('button');
    remove.classList.add('remove-button');
    remove.textContent = "Remove Book";
    bookCard.appendChild(remove);

    cardArea.appendChild(bookCard);

    // Add the event listener to the remove button inside the card
    // itself so that it can grab the title from inside the same card.
    remove.addEventListener('click', () => {
        const titleToRemove = title.textContent;
        removeBook(titleToRemove);
        cardArea.removeChild(bookCard);
    });
});


// Selection of parts of the DOM
const addButton = document.querySelector(".add-button");
const bookAdditionCard = document.querySelector('.book-addition-card');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');

// Shows the popup window when Add Book is pressed
addButton.addEventListener('click', () => {
    bookAdditionCard.style.display = 'flex'
});

// Hides the popup window when cancel is pressed inside of it
cancelButton.addEventListener('click', hidePopUp());

submitButton.addEventListener('click', () => {

});