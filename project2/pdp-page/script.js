let extraMemory = document.querySelector("#extra-memory");
let totalPrice = document.querySelector("#total-price");
let storage512 = document.querySelector("#storage512-gb");
let storage1TB = document.querySelector("#storage1tb");
let deliveryCost = document.querySelector("#delivery-cost");
let couponInput = document.querySelector("#coupon-input");
let applyBtn = document.querySelector("#apply-btn");

let isMemoryAdded = false;
let isStorage512Added = false;
let isStorage1TBAdded = false;
let isPaidDeliverySelected = false;

let memoryMessage = document.querySelector("#memory-message");

const addExtraMemory = () => {
    if (!isMemoryAdded) {
        extraMemory.innerHTML = 200;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 200;
        memoryMessage.innerHTML = "16GB RAM Added to the Cart";
        isMemoryAdded = true;
    }
};

const removeExtraMemory = () => {
    if (isMemoryAdded) {
        extraMemory.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 200;
        memoryMessage.innerHTML = "8GB RAM Added to the Cart";
        isMemoryAdded = false;
    }
};

const toggle512GBStorage = () => {
    if (isStorage512Added) {
        storage512.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 220;
        isStorage512Added = false;
    }
    else {
        storage512.innerHTML = 220;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 220;
        isStorage512Added = true;
        if (isStorage1TBAdded) toggle1TBStorage();
    }
};

const removeExtraStorage = () => {
    if (isStorage512Added) {
        storage512.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 220;
        isStorage512Added = false;
    }
    else if (isStorage1TBAdded) {
        storage1TB.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 400;
        isStorage1TBAdded = false;
    }
};

const toggle1TBStorage = () => {
    if (isStorage1TBAdded) {
        storage1TB.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 400;
        isStorage1TBAdded = false;
    }
    else {
        storage1TB.innerHTML = 400;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 400;
        isStorage1TBAdded = true;
        if (isStorage512Added) toggle512GBStorage();
    }
};

const selectFreeDelivery = () => {
    if (isPaidDeliverySelected) {
        deliveryCost.innerHTML = 0;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 20;
        isPaidDeliverySelected = false;
    }
};

const selectPaidDelivery = () => {
    if (!isPaidDeliverySelected) {
        deliveryCost.innerHTML = 20;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 20;
        isPaidDeliverySelected = true;
    }
};

const success = document.querySelector("#success");
const error = document.querySelector("#error");
const discountedTotalPrice = document.querySelector("#discounted-total");

const handleApplyBtn = () => {
    if (couponInput.value === "MAC10") {
        const discountPrice = parseInt(totalPrice.innerHTML) * 10 / 100;
        const discountedTotal = parseInt(totalPrice.innerHTML) - Math.floor(discountPrice);
        discountedTotalPrice.innerHTML = discountedTotal;
        document.querySelector("#hidden").style.display = "flex";
        success.innerHTML = "Congraulations!!🎉.You got 10% discount!";
        error.innerHTML = "";
        applyBtn.setAttribute("disabled", "disabled");
    }
    else {
        error.innerHTML = "Invalid Coupon!";
        success.innerHTML = "";
    }
}

const bagBtn = document.querySelector(".bagBtn");
const modal = document.querySelector(".modal");
bagBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

const handleContinue = () => {
    modal.style.display = "none";
}