import { books } from "./data/bookList.js";

const bookList = document.querySelector("ul");

console.log(bookList);

let html = "";

for (let i = 0; i < books.length; i++) {
  //   html = html + "<h4>" + books[i].title + "</h4>";

  html += `<li><span>${books[i].title}</span><span>ISBN: ${books[i].isbn}</span></li>`;

  console.log(html);
}

bookList.innerHTML = html;
