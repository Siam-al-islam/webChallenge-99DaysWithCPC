const form = document.getElementById("form");

form.addEventListener("click", (e) => {
    e.preventDefault();
})

const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#addBtn");
let errorMsg = document.querySelector("#error");
const listWrapper = document.querySelector("#list-wrapper");

const addList = () => {
    if (inputField.value == "") {
        errorMsg.innerHTML = "Please write a task";
    }
    else {
        errorMsg.innerHTML = "";

        const itemWrapper = document.createElement("div");
        itemWrapper.classList.add("item-wrapper");

        const checkBox = document.createElement("div");
        checkBox.classList.add("check-box");

        const remove = document.createElement("i");
        const removeClassesToAdd = ['fa', 'fa-regular', 'fa-trash'];
        remove.classList.add(...removeClassesToAdd);

        const li = document.createElement("li");
        li.innerText = inputField.value;
        li.classList.add("list");

        listWrapper.appendChild(itemWrapper)

        itemWrapper.appendChild(checkBox);
        itemWrapper.appendChild(li);
        itemWrapper.appendChild(remove);

        inputField.value = "";
    }
}

addBtn.addEventListener("click", addList);
