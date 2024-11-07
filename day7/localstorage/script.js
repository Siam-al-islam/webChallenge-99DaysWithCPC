const form = document.querySelector("#form");

const handleForm = (e) => {
    e.preventDefault();
}
form.addEventListener('submit', handleForm);

const inputField = document.querySelector("#input-field");
const listContainer = document.querySelector("#list-container");
const addBtn = document.querySelector("#add-btn");

const addList = () => {
    const list = document.createElement('li');
    list.innerText = inputField.value;
    listContainer.appendChild(list);
    inputField.value = "";
}

addBtn.addEventListener('click', addList);