const btn100 = document.querySelector("#btn100");
const btn300 = document.querySelector("#btn300");
const btn500 = document.querySelector("#btn500");
const textElement = document.querySelector("#text");

const addHundrade = () => {
    textElement.innerHTML = 200;
}

const addThreeHundrade = () => {
    let text = textElement.innerHTML;
    let intText = parseInt(text);
    intText = intText + 300;
    textElement.textContent = intText;
    console.log(intText);
}

const addFiveHundrade = () => {
    let text = textElement.innerHTML;
    let intText = parseInt(text);
    intText = intText + 500;
    textElement.textContent = intText;
    console.log(intText);
}

