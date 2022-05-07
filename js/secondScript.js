const listKey = "list";

const listItems = retrieveFromStorage();

createList();

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim();

  if (newItem.length >= 1) {
    listItems.push(newItem);
    createList();
    saveToStorage(listItems);
    listInput.value = "";
    console.log(listItems);
  }
}

function createList() {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach(function (item) {
    listContainer.innerHTML += `<li><span>${item}</span></li>`;
  });

  const items = document.querySelectorAll("li span");

  items.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  event.target.classList.toggle("complete");
}

function saveToStorage(valueToSave) {
  localStorage.setItem(listKey, JSON.stringify(valueToSave));
}

function retrieveFromStorage() {
  const currentList = localStorage.getItem(listKey);
  if (!currentList) {
    return [];
  }
  return JSON.parse(currentList);
}
