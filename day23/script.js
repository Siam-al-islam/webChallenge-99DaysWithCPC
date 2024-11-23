const fetchCountries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    console.log(res);

    if (res) {
        const container = document.querySelector("#country-container");
        const HtmlStr = res.map(country => {
            console.log(country);
            return `
                        <img src="${country.flags.png}" alt=""/>
                        <h3>${country.name.common}</h3>
                    `
        }).join("");

        container.insertAdjacentHTML("afterbegin", HtmlStr);
    }
    else {
        console.log("error");
    }
}

fetchCountries()