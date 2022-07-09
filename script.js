// MAIN Variable declaration
let myLibrary = [];
const book = document.querySelector(".book");
const shelf = document.querySelector(".shelf");
const addBookBtn = document.querySelector("#addBook");

const addPageBtn = document.querySelector(".addPage");
const subtractPageBtn = document.querySelector(".subtractPage");

// Onclick functionallity
addPageBtn.onclick = () => console.log("add page clicked");
subtractPageBtn.onclick = () => console.log("subtract page clicked");

addBookBtn.onclick = () => AddBook("Title", "James West", 160);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

// Main Functions

function addBookToLibrary(bookTitle, bookAuthor, pageNum) {
  let newBook = new Book(bookTitle, bookAuthor, pageNum);
  myLibrary.push(newBook);
}

function AddBook(bookTitle, bookAuthor, pageNum) {
  addBookToLibrary(bookTitle, bookAuthor, pageNum);
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  bookDisplay(newBook, bookTitle, bookAuthor, pageNum);
  shelf.appendChild(newBook);
}

// Side Functions

function bookDisplay(book, bookTitle, bookAuthor, pageNum) {
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pagesDiv = document.createElement("div");
  const pagesParagraph = document.createElement("p");
  const currentPage = document.createElement("span");
  const totalPages = document.createElement("span");
  const addPageBtn = document.createElement("button");
  const subtractPageBtn = document.createElement("button");
  const actions = document.createElement("div");
  const unfocusBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const markerContainer = document.createElement("div");
  const readMarker = document.createElement("div");

  title.classList.add("title");
  author.classList.add("author");
  pagesDiv.classList.add("pagesDiv");
  currentPage.classList.add("currentPage");
  totalPages.classList.add("totalPages");
  addPageBtn.classList.add("addPage");
  subtractPageBtn.classList.add("subtractPage");
  actions.classList.add("actions");
  unfocusBtn.classList.add("unfocus");
  deleteBtn.classList.add("delete");
  markerContainer.classList.add("markerContainer");
  readMarker.classList.add("readMarker");

  pagesDiv.appendChild(pagesParagraph);
  pagesParagraph.appendChild(currentPage);
  pagesParagraph.appendChild(totalPages);
  pagesDiv.appendChild(addPageBtn);
  pagesDiv.appendChild(subtractPageBtn);
  actions.appendChild(unfocusBtn);
  actions.appendChild(deleteBtn);
  markerContainer.appendChild(readMarker);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pagesDiv);
  book.appendChild(actions);
  book.appendChild(markerContainer);

  title.innerHTML = bookTitle;
  author.innerHTML = bookAuthor;
  currentPage.innerHTML = 0;
  totalPages.innerHTML = pageNum;
  addPageBtn.innerHTML = "+";
  subtractPageBtn.innerHTML = "-";
  unfocusBtn.innerHTML = "UNFOCUS";
  deleteBtn.innerHTML = "DELETE";
  readMarker.innerHTML = "READ"; // Temporary
}

// Helper functions

function insert(child, parent) {
  parent.appendChild(child);
}
