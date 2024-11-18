let extraMemory = document.querySelector("#extra-memory");
let totalPrice = document.querySelector("#total-price");
let totalPriceText = parseInt(totalPrice.innerHTML);

const addExtraMemory = () => {
    extraMemory.innerHTML = 200;
    let extraMemoryText = parseInt(extraMemory.textContent);
    totalPrice.innerHTML = totalPriceText + extraMemoryText;

}

const removeExtraMemory = () => {
    extraMemory.innerHTML = 0;
    totalPrice.innerHTML = totalPriceText - parseInt(extraMemory.textContent);
}