const listKey = "list";

let listItems = retrieveFromStorage();

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
    listInput.focus();
    console.log(listItems);
  }
}

function createList() {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach(function (item) {
    listContainer.innerHTML += `<li><span>${item}</span><i class="fa solid fa-trash" data-item="${item}"></i></li>`;
  });

  const items = document.querySelectorAll("li span");

  items.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach(function (can) {
    can.addEventListener("click", removeFromList);
  });
}

function handleClick(event) {
  event.target.classList.toggle("complete");
}

function removeFromList(event) {
  console.log(event);
  const deleteThisItem = event.target.dataset.item;

  const newList = listItems.filter(function (item) {
    if (deleteThisItem !== item) {
      return true;
    }
  });

  listItems = newList;
  createList();
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
