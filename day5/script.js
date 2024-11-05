const inputField = document.querySelector('#input-field');
const form = document.getElementById('form');
const addBtn = document.querySelector('#add-btn');
const itemContainer = document.querySelector('#list-container');
const item = document.querySelector('.item');

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

const addList = () => {
    if (inputField.value == "") {
        alert("please add something");
    }
    else {
        const newItem = document.createElement('p');
        const span = document.createElement('span');
        span.innerHTML = '&#10006;';
        newItem.innerText = inputField.value;
        itemContainer.appendChild(newItem);
        newItem.appendChild(span);
        newItem.classList.add('item');
    }
    inputField.value = "";
}

itemContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})

addBtn.addEventListener('click', addList);