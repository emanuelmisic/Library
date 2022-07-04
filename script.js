const book = document.querySelector(".book");
const shelf = document.querySelector(".shelf");
const addBookBtn = document.querySelector("#addBook");

addBookBtn.onclick = () => tempAddBook();

let myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary(title, author, read) {
  newBook = new Book(title, author, read);
  myLibrary.push(newBook);
}

function tempAddBook() {
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  shelf.appendChild(newBook);
}
