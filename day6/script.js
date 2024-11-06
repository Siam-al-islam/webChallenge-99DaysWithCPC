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
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';

        const itemText = document.createElement('p');
        itemText.classList.add('list-title');
        itemText.innerText = inputField.value;

        const span = document.createElement('span');
        span.innerHTML = '&#10006;';

        newItem.appendChild(checkbox);
        newItem.appendChild(itemText);
        newItem.appendChild(span);

        newItem.classList.add('item');
        itemContainer.appendChild(newItem);

        inputField.value = "";
    }
};

itemContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

addBtn.addEventListener('click', addList);
