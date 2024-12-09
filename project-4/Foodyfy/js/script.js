const cardContainer = document.querySelector("#card-container");
const notFound = document.querySelector("#not-found");
const forms = document.querySelectorAll("#form");
const container = document.querySelector("#container");
const productText = document.querySelector("#product-text");
const navbarSearch = document.querySelector("#navbar-search");

const getRecipes = async (query) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const res = await data.json();
    console.log(res);

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
        getRecipes(searchInput);
        container.classList.add('hidden');
        productText.classList.add('hidden');
    })
})
