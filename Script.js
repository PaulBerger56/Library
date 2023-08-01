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

// Hides the popup window
function hidePopUp() {
    bookAdditionCard.style.display = 'none';
};

function createCard(book) {
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
};

// Creates cards for every book inside myLibrary
function generateAllCards() {
    cardArea.innerHTML = '';
    myLibrary.forEach((book) => {
        createCard(book);
    });
};


// Temporary books to show on the page
let bookOne = new Book("Rain in Spain", "Writerino", 50, false);
myLibrary.push(bookOne);

let bookTwo = new Book("Save the drama for yo mamma", "You know who", 15, true);
myLibrary.push(bookTwo);


// Selection of parts of the DOM
const cardArea = document.querySelector(".card-container");
const addButton = document.querySelector(".add-button");
const bookAdditionCard = document.querySelector('.book-addition-card');
const submitButton = document.querySelector('.submit');
const cancelButton = document.querySelector('.cancel');

// Shows the popup window when Add Book is pressed
addButton.addEventListener('click', () => {
    bookAdditionCard.style.display = 'flex'
});

// Hides the popup window when cancel is pressed inside of it
cancelButton.addEventListener('click', () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('yes').checked = true;
    hidePopUp();
});

// Creates a new book and adds it to myLibrary when submit is pressed
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const isRead = document.getElementById('yes').checked;

    const newBook = new Book(title, author, pages, isRead);
    addBookToLibrary(newBook);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('yes').checked = true;

    createCard(newBook);

    hidePopUp();
});

// Calls generateAllCards to populate the hardcoded cards in the beginning
generateAllCards();




