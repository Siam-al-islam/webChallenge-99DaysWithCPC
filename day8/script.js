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
        const doneWrapper = document.createElement('div');

        const itemText = document.createElement('p');
        itemText.classList.add('list-title');
        itemText.innerText = inputField.value;

        const span = document.createElement('span');
        span.innerHTML = '&#10006;';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.innerHTML = "Done";

        doneBtn.addEventListener('click', (e) => {
            doneBtn.innerHTML = "&#10004;";
        })

        doneWrapper.appendChild(span);
        doneWrapper.appendChild(doneBtn);

        newItem.appendChild(itemText);
        newItem.appendChild(doneWrapper);
        doneWrapper.classList.add('done-wrapper');

        newItem.classList.add('item');
        itemContainer.appendChild(newItem);

        inputField.value = "";
        saveData();
    }
};

itemContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.closest('.item').remove();
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