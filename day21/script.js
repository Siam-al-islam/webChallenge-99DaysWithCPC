const loadBtn = document.querySelector("#btn");
const container = document.querySelector("#container");

const fetchData = async () => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const res = await data.json();
    console.log(res.meals);

    res.meals.forEach(meal => {
        const p = document.createElement('p');
        p.innerText = meal.strCategory;
        container.appendChild(p);
    });
}

loadBtn.addEventListener("click", fetchData)