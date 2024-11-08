const inputField = document.querySelector('#input-field');
const form = document.getElementById('form');
const addBtn = document.querySelector('#add-btn');
const itemContainer = document.querySelector('#list-container');

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const addList = () => {
    if (inputField.value === "") {
        alert("Please add something");
    } else {
        const newItem = document.createElement('div');
        const
        const itemText = document.createElement('p');
        itemText.classList.add('list-title');
        itemText.innerText = inputField.value;

        const span = document.createElement('span');
        span.innerHTML = '&#10006;';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.innerHTML = "Done";

        newItem.appendChild(itemText);
        newItem.appendChild(span);
        newItem.appendChild(doneBtn);

        newItem.classList.add('item');
        itemContainer.appendChild(newItem);

        inputField.value = "";
        saveData();
    }
};

itemContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

addBtn.addEventListener('click', addList);

const saveData = () => {
    localStorage.setItem("data", itemContainer.innerHTML);
}

const showData = () => {
    itemContainer.innerHTML = localStorage.getItem("data");
}

showData();