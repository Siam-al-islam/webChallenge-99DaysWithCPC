let extraMemory = document.querySelector("#extra-memory");
let totalPrice = document.querySelector("#total-price");
let storage512 = document.querySelector("#storage512-gb");
let storage1TB = document.querySelector("#storage1tb-gb");

let isMemoryAdded = false;
let isStorage512Added = false;
let isStorage1TBAdded = false;
let isPaidDeliverySelected = false;

const toggleExtraMemory = () => {
    if (isMemoryAdded) {
        extraMemory.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 200;
        isMemoryAdded = false;
    } else {
        extraMemory.innerHTML = 200;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 200;
        isMemoryAdded = true;
    }
};

const toggle512GBStorage = () => {
    if (isStorage512Added) {
        storage512.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 220;
        isStorage512Added = false;
    } else {
        storage512.innerHTML = 220;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 220;
        isStorage512Added = true;

        if (isStorage1TBAdded) toggle1TBStorage();
    }
};

const toggle1TBStorage = () => {
    if (isStorage1TBAdded) {
        storage1TB.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 400;
        isStorage1TBAdded = false;
    } else {
        storage1TB.innerHTML = 400;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 400;
        isStorage1TBAdded = true;

        if (isStorage512Added) toggle512GBStorage();
    }
};

const selectFreeDelivery = () => {
    if (isPaidDeliverySelected) {
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 20;
        isPaidDeliverySelected = false;
    }
};

const selectPaidDelivery = () => {
    if (!isPaidDeliverySelected) {
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 20;
        isPaidDeliverySelected = true;
    }
};
