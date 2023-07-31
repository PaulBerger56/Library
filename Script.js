let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    if(!isInLibrary(book)){
        myLibrary.push(book);
    }
}

function isInLibrary(book) {
    for(let value of myLibrary) {
        if(value.title === book.title) {
            return true;
        }
    }
    return false;
}

let bookOne = new Book("Rain in Spain", "Writerino", 50, false);