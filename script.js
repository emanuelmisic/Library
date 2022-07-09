// MAIN Variable declaration
let myLibrary = [];
let bookID;
const book = document.querySelector(".book");
const shelf = document.querySelector(".shelf");
const addBookBtn = document.querySelector("#addBook");

addBookBtn.onclick = () => AddBook("Title", "James West", 20);

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
  for (let i = 0; i <= myLibrary.length; i++) {
    bookID = i;
  }
  newBook.id = `book${bookID}`;
  newBook.classList.add("book");
  bookDisplay(bookID, newBook, bookTitle, bookAuthor, pageNum);
  shelf.appendChild(newBook);
}

// Side Functions

function bookDisplay(id, book, bookTitle, bookAuthor, pageNum) {
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
  title.id = `title${id}`;
  author.classList.add("author");
  author.id = `author${id}`;
  pagesDiv.classList.add("pagesDiv");
  pagesDiv.id = `pagesDiv${id}`;
  addPageBtn.classList.add("addPage");
  addPageBtn.id = `addPageBtn${id}`;
  subtractPageBtn.classList.add("subtractPage");
  subtractPageBtn.id = `subtractPageBtn${id}`;
  actions.classList.add("actions");
  actions.id = `actions${id}`;
  unfocusBtn.classList.add("unfocus");
  unfocusBtn.id = `unfocusBtn${id}`;
  deleteBtn.classList.add("delete");
  deleteBtn.id = `deleteBtn${id}`;
  markerContainer.classList.add("markerContainer");
  markerContainer.id = `markerContainer${id}`;
  readMarker.classList.add("readMarker");
  readMarker.id = `readMarker${id}`;

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
  currentPage.innerHTML = 1;
  totalPages.innerHTML = pageNum;
  pagesParagraph.innerHTML = `Pages: <span class="currentPage" id="currentPage${id}">${currentPage.innerHTML}</span> /
  <span class="totalPages" id="totalPages${id}">${totalPages.innerHTML}</span>`;
  addPageBtn.innerHTML = "+";
  subtractPageBtn.innerHTML = "-";
  unfocusBtn.innerHTML = "UNFOCUS";
  deleteBtn.innerHTML = "DELETE";
  readMarker.innerHTML = "UNREAD";

  addPageBtn.onclick = () => addPage(id);
  subtractPageBtn.onclick = () => subtractPage(id);
  unfocusBtn.onclick = () => unfocusBook(id);
  deleteBtn.onclick = () => deleteBook(id);
}

function addPage(id) {
  const currentPage = document.querySelector(`#currentPage${id}`);
  const totalPages = document.querySelector(`#totalPages${id}`);
  const readMarker = document.querySelector(`#readMarker${id}`);
  if (+currentPage.innerHTML < +totalPages.innerHTML) currentPage.innerHTML++;
  if (+currentPage.innerHTML == +totalPages.innerHTML) {
    readMarker.classList.add("read");
    readMarker.innerHTML = "READ";
  }
}

function subtractPage(id) {
  const currentPage = document.querySelector(`#currentPage${id}`);
  currentPage.innerHTML--;
}

function unfocusBook(id) {
  const currentBook = document.querySelector(`#book${id}`);
  const focusBtn = document.querySelector(`#unfocusBtn${id}`);
  currentBook.classList.toggle("unfocused");
  if (focusBtn.innerHTML == "UNFOCUS") focusBtn.innerHTML = "FOCUS";
  else focusBtn.innerHTML = "UNFOCUS";
}

function deleteBook(id) {
  const currentBook = document.querySelector(`#book${id}`);
  currentBook.remove();
}
