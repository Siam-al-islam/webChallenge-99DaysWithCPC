const fetchData = async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const res = await data.json();
    console.log(res);
    if (res.meals) {
        const selector = document.querySelector(".item-container");

        const HtmlStr = res.meals.map(meal => `
            <div class="item">
                <img src="${meal.strMealThumb ? meal.strMealThumb : ""}" alt="">
                <h2>${meal.strMeal ? meal.strMeal : ""}</h2>
                <p>${meal.strInstructions.slice(0, 300)}</p>
                <div class="ingredients">
                    <p>${meal.strIngredient1 ? meal.strIngredient1 : ""}</p>
                    <p>${meal.strIngredient2 ? meal.strIngredient2 : ""}</p>
                    <p>${meal.strIngredient3 ? meal.strIngredient3 : ""}</p>
                    <p>${meal.strIngredient4 ? meal.strIngredient4 : ""}</p>
                </div>
            </div>
    `).join("");
        selector.insertAdjacentHTML("afterbegin", HtmlStr);
    }
    else {
        console.log("error");
    }
}

fetchData()
