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

        const todoCardHtml = `
            <li class="item-wrapper">
                <div class="checkBox-wrapper">
                    <div class="check-box"></div>
                </div>
                <span class="list"></span>
                <i id="removeIcon" class="fa fa-regular fa-trash remove-icon" aria-hidden="true"></i>
            </li>
        `;

        listWrapper.insertAdjacentHTML('afterbegin', todoCardHtml);
        document.querySelector('.list').textContent = inputField.value;

        const removeIcon = document.querySelector("#removeIcon");
        removeIcon.addEventListener("click", (e) => {
            e.target.closest(".item-wrapper").remove();
        });
    }

    const list = document.querySelector(".list");
    list.addEventListener("click", (e) => {
        const checkBox = document.querySelector(".check-box");
        e.target.closest("").classList.toggle("checked");
        console.log(e);
    });

    inputField.value = "";
}



addBtn.addEventListener("click", addList);
