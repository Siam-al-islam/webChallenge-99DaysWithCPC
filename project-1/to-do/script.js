const form = document.getElementById("form");

form.addEventListener("click", (e) => {
    e.preventDefault();
});

const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#addBtn");
let errorMsg = document.querySelector("#error");
const listWrapper = document.querySelector("#list-wrapper");

const addList = () => {
    if (inputField.value === "") {
        errorMsg.innerHTML = "Please write a task";
    } else {
        errorMsg.innerHTML = "";

        const todoCardHtml = `
            <li class="item-wrapper">
                <div class="checkBox-wrapper">
                    <div class="check-box"></div>
                </div>
                <span class="list">${inputField.value}</span>
                <i class="fa fa-trash remove-icon" aria-hidden="true"></i>
            </li>
        `;

        listWrapper.insertAdjacentHTML('afterbegin', todoCardHtml);
        inputField.value = "";
        saveData();
    }
};

addBtn.addEventListener("click", addList);

const saveData = () => {
    localStorage.setItem("data", listWrapper.innerHTML);
};

const showData = () => {
    listWrapper.innerHTML = localStorage.getItem("data") || '';
};

listWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-icon")) {
        e.target.closest(".item-wrapper").remove();
        saveData();
    } else if (e.target.classList.contains("list")) {
        const checkBox = e.target.closest(".item-wrapper").querySelector(".check-box");
        checkBox.classList.toggle("checked");
        e.target.classList.toggle("list-checked");
        saveData();
    }
});

showData();
