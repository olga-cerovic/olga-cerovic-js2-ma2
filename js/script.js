let books = [
  {
    isbn: "1600506460320",
    title: "Great book",
  },
  {
    isbn: "1600506460373",
    title: "Ok book",
  },
  {
    isbn: "1600506460521",
    title: "Bad book",
  },
  {
    isbn: "1600506460456",
    title: "Terrible book",
  },
];

const bookList = document.querySelector("ul.book-list");

const noData = document.createElement("p");
noData.innerText = "The list is empty. No items to show.";

function onRemove(event) {
  const target = event.target;
  const id = target.parentElement.id;

  const filteredBooks = books.filter(function (book) {
    return book.isbn !== id;
  });

  const filteredBooksHtml = filteredBooks.map(createBookElement);

  bookList.innerHTML = "";

  if (filteredBooksHtml?.length < 1) {
    bookList.append(noData);
  } else {
    bookList.append(...filteredBooksHtml);
  }

  books = filteredBooks;
}

function createBookElement(book) {
  const element = document.createElement("li");

  const button = document.createElement("button");
  button.innerText = "remove";
  button.addEventListener("click", onRemove);

  element.id = book.isbn;
  element.innerText = book.title;

  element.append(button);

  return element;
}

function start() {
  const templateList = books.map(createBookElement);

  bookList.append(...templateList);
}

start();
