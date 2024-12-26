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