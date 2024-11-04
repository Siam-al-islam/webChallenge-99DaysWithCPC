const inputField = document.querySelector('#input-field');
const form = document.getElementById('form');
const addBtn = document.querySelector('#add-btn');
const itemContainer = document.querySelector('#list-container');

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const addList = () => {
    if (inputField.value == "") {
        alert("please add something");
    }
    else {
        const newItem = document.createElement('p');
        newItem.innerText = inputField.value;
        itemContainer.appendChild(newItem);
        newItem.classList.add('item')
    }
    inputField.value = "";
}

addBtn.addEventListener('click', addList);