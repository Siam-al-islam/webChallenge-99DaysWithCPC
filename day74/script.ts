function showText() {
    const inputElement = document.getElementById("inputText") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLParagraphElement;
  
    if (inputElement && resultElement) {
      resultElement.textContent = `You entered: ${inputElement.value}`;
    }
  }
  
  window.onload = () => {
    const buttonElement = document.getElementById("showButton");
  
    if (buttonElement) {
      buttonElement.addEventListener("click", showText);
    }
  };
  