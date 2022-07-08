const book = document.querySelector(".book");
const shelf = document.querySelector(".shelf");
const addBookBtn = document.querySelector("#addBook");

const addPageBtn = document.querySelector(".addPage");
const subtractPageBtn = document.querySelector(".subtractPage");
addPageBtn.onclick = () => console.log("add page clicked");
subtractPageBtn.onclick = () => console.log("subtract page clicked");

addBookBtn.onclick = () => tempAddBook();

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function tempAddBook() {
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  shelf.appendChild(newBook);
}
