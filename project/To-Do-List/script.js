let toDoCount = 0;

function onClickAdd() {
  const input = document.getElementById("todo-input");
  const inputValue = input.value;

  if (inputValue === "") {
    alert("할일을 입력하세요!");
    return;
  }

  input.value = "";

  const listItem = document.createElement("div");
  listItem.setAttribute("id", "list-item");

  const listCheckBox = document.createElement("input");
  listCheckBox.setAttribute("id", "list-checkbox");
  listCheckBox.setAttribute("type", "checkbox");

  const listContent = document.createElement("span");
  listContent.setAttribute("id", "list-content");
  listContent.innerHTML = inputValue;

  const listContainer = document.getElementById("list-container");

  listCheckBox.addEventListener("click", () => {
    if (listCheckBox.checked) {
      listContent.style.textDecoration = "line-through";
      listContent.style.color = "gray";
      toDoCount--;
    } else {
      listContent.style.textDecoration = "none";
      listContent.style.color = "black";
      toDoCount++;
    }
    refreshDescription();
  });

  listItem.append(listCheckBox, listContent);
  listContainer.append(listItem);

  toDoCount++;
  refreshDescription();
}

function refreshDescription() {
  const description = document.getElementById("description");
  description.innerHTML = toDoCount
    ? `${toDoCount}개의 할 일이 있습니다.`
    : `할 일을 모두 끝냈습니다!`;
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", onClickAdd);
