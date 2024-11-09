const form = document.getElementById("form");

form.addEventListener("click", (e) => {
    e.preventDefault();
})

const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#addBtn");

const addList = () => {
    if (inputField.value == "") {
        document.querySelector("#error").innerHTML = "Please write a task";
    }
}

addBtn.addEventListener("click", addList);