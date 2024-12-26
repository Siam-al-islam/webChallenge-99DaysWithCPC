const recordBtn = document.querySelector("#record-btn");
const backBtn = document.querySelector("#back-btn");
const welcomeSection = document.querySelector("#welcome-sec");
const expenseDetails = document.querySelector("#expense-details");

const handleRecordBtn = () => {
    showElement(backBtn, "hidden");
    hideElement(welcomeSection, "hidden");
    showElement(expenseDetails, "hidden");
};

const handleBackBtn = () => {
    hideElement(expenseDetails, "hidden");
    hideElement(backBtn, "hidden");
    showElement(welcomeSection, "hidden");
}

let expences = [];
let totalAmount = 0;

const form = document.querySelector("#form")
const categorySelect = document.querySelector("#category-select");
const amountInput = document.querySelector("#amount-input");
const dateInput = document.querySelector("#date-input");
const addBtn = document.querySelector("#add-btn");
const expencesBody = document.querySelector("#expense-table-body");
const totalAmountCell = document.querySelector("#total-amount");

addBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    let category = categorySelect.value;
    let amount = amountInput.value;
    let date = dateInput.value;

    if(category, amount, date === ""){
        console.log("please fill all of this field");
        return;
    }
    else if(date = ""){
        console.log("Please select a date");
    }

    expences.push({category, amount, date});
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expencesBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('px-6 py-1 text-white bg-red-500 font-medium rounded-sm');
    deleteBtn.addEventListener('click', ()=> {
        expences.splice(expences.indexOf(expence), 1);
        totalAmount -= expence.amount;
        totalAmountCell.textContent = totalAmount;

        expencesBody.removeChild(newRow);
    })
})