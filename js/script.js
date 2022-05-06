import { books } from "./data/bookList.js";

const bookList = document.querySelector("ul.book-list");

const templateList = books.map(createHtmlList).join('');

bookList.innerHTML = templateList;

function createHtmlList(book) {
  return `<li id="${book.isbn}">${book.title}</li>`;
}

console.log(templateList);
// const bookContainer = document.querySelector(".book-container");

// console.log(bookContainer);

// let html = "";

// for (let i = 0; i < books.length; i++) {
//   //   html = html + "<h4>" + books[i].title + "</h4>";

//   html += `<div class="book">
//                 <h4>${books[i].title}</h4>
//                 <p>${books[i].isbn}</p>
//             </div>`;

//   console.log(html);
// }

// bookContainer.innerHTML = html;
