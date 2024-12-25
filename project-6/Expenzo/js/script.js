const recordBtn = document.querySelector("#record-btn");
const welcomeSection = document.querySelector("#welcome-sec");

recordBtn.addEventListener("click", ()=>{
    hideElement(welcomeSection, "hidden");
})