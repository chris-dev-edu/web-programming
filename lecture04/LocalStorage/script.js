const input = document.getElementById("text-input");
const addBtn = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

const LIST_STORAGE_KEY = "my-lists";
let myList = [];

function saveList() {
  localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(myList));
}

function loadList() {
  const savedList = localStorage.getItem(LIST_STORAGE_KEY);

  if (savedList !== null) {
    const parsedList = JSON.parse(savedList);
    myList = parsedList;
  }

  myList.forEach(addListItem);
}

function addListItem(value) {
  const newElement = document.createElement("div");
  newElement.innerHTML = value;

  listContainer.append(newElement);
}

function onClickAdd() {
  const value = input.value;

  addListItem(value);
  input.value = "";
  myList.push(value);
  saveList();
}

function init() {
  addBtn.addEventListener("click", onClickAdd);
  loadList();
}

init();
