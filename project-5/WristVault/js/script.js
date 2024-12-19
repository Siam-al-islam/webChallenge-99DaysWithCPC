const cardWrapper = document.querySelector('#card-wrapper');
const cartTab = document.querySelector("#cartTab");
const cartContent = document.querySelector("#cartContent");
const cartIcon = document.querySelector("#cartIcon");
const closeBtn = document.querySelector("#close");
const badgeText = document.querySelector("#cart-text");
let cartList = [];

const getWatches = async () => {
    const data = await fetch("watches.json");
    const res = await data.json();
    console.log(res);

    res.watches.forEach((watch, index) => {
        const cardStr = `
        <div class="flex flex-col items-center border bg-[#d6d7d256] border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl">
            <img class="object-cover rounded-t-lg h-72 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
            src="${watch.imageUrl}"
            alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight">
                 ${watch.name}
                </h5>
                <p class="mb-3 font-normal">${watch.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-semibold text-orange-400">${watch.price} <span class="font-normal text-black">${watch.currency}</span></span>
                    <div class="font-medium flex items-center gap-2">
                        <span><i class="fa fa-solid fa-star text-orange-400"></i></span>
                        <span>${watch.rating}</span>
                    </div>
                </div>
                <h3 class="font-semibold mt-3">Brand: <span class="text-[#AE946A]">${watch.brand}</span></h3>
                <div class="flex gap-2 items-center">
                    <button class="mt-4 w-2/4 bg-[#AE946A] text-white py-2 rounded-md add-to-cart-btn" data-index="${index}" type="button">
                        Add to cart
                    </button>
                    <div id="popup-modal-${index}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal-${index}">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-4 md:p-5 text-center">
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Add to cart this product?</h3>
                                <button id="sure-btn" data-modal-hide="popup-modal-${index}" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-hide="popup-modal-${index}" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                            </div>
                        </div>
                    </div>                   
                </div>
                <button class="mt-4 w-2/4 bg-[#AE946A] text-white py-2 rounded-md add-to-cart-btn">View More</button>
                </div>
            </div>
        </div>
        `;
        cardWrapper.insertAdjacentHTML('beforeend', cardStr);
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            const selectedWatch = res.watches[index];
            addToCart(selectedWatch, index);
        });
    });
};

const addToCart = (item, index) => {
    cartList.push(item);
    badgeText.innerHTML = cartList.length;
    const cartItemStr = `
        <div class="flex items-center justify-between gap-3 mt-8">
            <img class="w-11 object-cover"
            src="${item.imageUrl}"
            alt="">
            <h2>${item.name.slice(0, 10) + "..."}</h2>
            <span>$ <span>${item.price}</span></span>
        </div>
    `;
    cartContent.insertAdjacentHTML('beforeend', cartItemStr);

    const modal = document.querySelector(`#popup-modal-${index}`);
    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

document.addEventListener('click', (e) => {
    if (e.target.matches('[data-modal-hide]')) {
        const modalId = e.target.getAttribute('data-modal-hide');
        const modal = document.querySelector(`#${modalId}`);
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});

cartIcon.addEventListener('click', () => {
    cartTab.classList.toggle("hidden");
});

closeBtn.addEventListener('click', () => {
    cartTab.classList.add("hidden");
});

getWatches();