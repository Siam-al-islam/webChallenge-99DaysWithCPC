const cardContainer = document.querySelector("#card-container");
const notFound = document.querySelector("#not-found");
const forms = document.querySelectorAll("#form");
const container = document.querySelector("#container");
const productText = document.querySelector("#product-text");
const navbarSearch = document.querySelector("#navbar-search");

const showRecipes = async () => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const res = await data.json();
    console.log(res);
    res.categories.forEach(category => {
        const categoryStr = `
        <div class="max-w-[485px] rounded-2xl shadow-2xl pb-8">
        <img class="rounded-t-2xl w-full" src="${category.strCategoryThumb ? category.strCategoryThumb : "https://i.ibb.co.com/KG5kHnx/image-not-found-scaled.png"}"
        alt="">
        <div class="flex items-center justify-between mt-4 px-6">
            <div>
                <h2 class="text-xl md:text-3xl font-bold">${category.strCategory}</h2>
                <button
                    class="bg-[#F48E28] font-semibold px-5 md:px-7 py-2 rounded-full text-white mt-4">See More
                </button>
            </div>
            <div>
                <div class="flex items-center gap-2">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 1L8.854 4.6204L13 5.20452L10 8.02103L10.708 12L7 10.1204L3.292 12L4 8.02103L1 5.20452L5.146 4.6204L7 1Z"
                            fill="#F48E28" stroke="#F48E28" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span>4.9</span>
                </div>
            </div>
        </div>
    </div>
        `;
        cardContainer.insertAdjacentHTML('afterbegin', categoryStr);
    })
}

showRecipes()

const getRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const res = await data.json();

    if (!res.meals) {
        const htmlStr = `
        <div class="max-w-80 mx-auto text-center">
            <img src="https://i.ibb.co.com/HBRDGGz/undraw-Not-found-re-bh2e.png" alt="">
            <h2 class="text-2xl mt-3">Nothing Found</h2>
        </div>
        `;
        notFound.insertAdjacentHTML('afterbegin', htmlStr);
    }
    else {
        res.meals.forEach(meal => {
            const htmlStr = `
                <div class="max-w-[485px] rounded-2xl shadow-2xl pb-8">
                    <img class="rounded-t-2xl h-[333px] w-full object-cover" src="${meal.strMealThumb ? meal.strMealThumb : "https://i.ibb.co.com/KG5kHnx/image-not-found-scaled.png"}"
                    alt="">
                    <div class="flex items-center justify-between mt-4 px-6">
                        <div>
                            <h2 class="text-xl md:text-3xl font-bold">${meal.strMeal.substring(0, 15) + "..."}</h2>
                            <button
                                class="bg-[#F48E28] font-semibold px-5 md:px-7 py-2 rounded-full text-white mt-4">Add To
                                Cart
                            </button>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 1L8.854 4.6204L13 5.20452L10 8.02103L10.708 12L7 10.1204L3.292 12L4 8.02103L1 5.20452L5.146 4.6204L7 1Z"
                                        fill="#F48E28" stroke="#F48E28" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span>4.9</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 mt-8">
                        <h2 class="font-medium">Ingredients:</h2>
                        <div class="flex gap-2 flex-wrap mt-3">
                            <p class="text-xs font-semibold bg-orange-200 px-2 py-1 rounded-xl">${meal.strIngredient1}</p>
                            <p class="text-xs font-semibold bg-orange-200 px-2 py-1 rounded-xl">${meal.strIngredient2}</p>
                            <p class="text-xs font-semibold bg-orange-200 px-2 py-1 rounded-xl">${meal.strIngredient3}</p>
                            <p class="text-xs font-semibold bg-orange-200 px-2 py-1 rounded-xl">${meal.strIngredient4}</p>
                            <p class="text-xs font-semibold bg-orange-200 px-2 py-1 rounded-xl">${meal.strIngredient5}</p>
                        </div>
                    </div>
                </div>
                `;
            cardContainer.insertAdjacentHTML('afterbegin', htmlStr);
        });
    }
}

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        notFound.innerHTML = '';
        cardContainer.innerHTML = '';
        e.preventDefault();
        const searchInputElem = form.querySelector("#search-navbar");
        const searchInput = searchInputElem.value.trim();
        if (!searchInput == '') {
            getRecipes(searchInput);
            container.classList.add('hidden');
            productText.classList.add('hidden');
        }
        else {
            const toastContainer = document.createElement("div");
            toastContainer.innerHTML = `
                <div class="absolute transform -translate-x-1/2 top-0 left-1/2">
                    <div id="toast-warning" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                        </svg>
                        <span class="sr-only">Warning icon</span>
                    </div>
                    <div class="ms-3 text-sm font-normal">Please write something!</div>
                    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                    </div>
                </div>`;
            document.body.appendChild(toastContainer.firstElementChild);

            setTimeout(() => {
                const toast = document.querySelector("#toast-warning");
                if (toast) toast.remove();
            }, 3000);
        }
    })
})
