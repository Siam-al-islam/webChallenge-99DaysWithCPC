const inputField = document.querySelector('#input-field');
const addBtn = document.querySelector('#add-btn');
const itemContainer = document.querySelector('#list-container');

const addList = () => {
    const newItem = document.createElement('p');
    newItem.innerText = inputField.value;
    itemContainer.appendChild(newItem);
    newItem.classList.add('item')
    inputField.value = "";
}

addBtn.addEventListener('click', addList);