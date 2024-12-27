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
    let category = categorySelect.value;
    let amount = parseInt(amountInput.value);
    let date = dateInput.value;

    if(category, amount, date === ""){
        console.log("please fill all of this field");
        return;
    }

    expences.push({category, amount, date});
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    console.log(expences);
    
    const htmlStr = `
        <tr class="text-center">
            <td>${category}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td><i class="fa fa-trash remove-icon" aria-hidden="true"></i></td>
        </tr>
    `;

    expencesBody.insertAdjacentHTML('beforeend', htmlStr);
})