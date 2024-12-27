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

const fieldError = document.querySelector("#fields-error");
const numberError = document.querySelector("#number-error");

addBtn.addEventListener("click", () => {
    let category = categorySelect.value;
    let amount = parseInt(amountInput.value);
    let date = dateInput.value;
    
    hideElement(fieldError, "hidden")
    hideElement(numberError, "hidden")

    if (category, amount, date === "") {
        showElement(fieldError, "hidden")
        return;
    }
    if(isNaN(amount)){
        showElement(numberError, "hidden")
        return;
    }

    expences.push({ category, amount, date });
    totalAmount += amount;
    totalAmountCell.textContent = "Total: " + totalAmount;
    totalAmountCell.classList.add('totalBg');

    const htmlStr = `
        <tr id="expense-item" class="text-center">
            <td>${category}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td><i class="fa fa-trash remove-icon" aria-hidden="true"></i></td>
        </tr>
    `;

    expencesBody.insertAdjacentHTML('beforeend', htmlStr);
});

expencesBody.addEventListener('click', (e) => {
    if(e.target.classList.contains("remove-icon")){
        const expenseRow = e.target.closest("tr");

        const category = expenseRow.querySelector("td:nth-child(1)").textContent;
        const amount = parseInt(expenseRow.querySelector("td:nth-child(2)").textContent);

        expenseRow.remove();

        expences = expences.filter(exp => exp.category !== category || exp.amount !== amount);

        totalAmount -= amount;

        totalAmountCell.textContent = "Total: " + totalAmount;

        if (totalAmount === 0) {
            totalAmountCell.classList.remove('totalBg');
        }
    }
})