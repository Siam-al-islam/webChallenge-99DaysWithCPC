// navbar responsive
const navList = document.querySelector(".navbar-list");
const navIcon = document.querySelector(".navbar-icon");

navIcon.addEventListener('click', () => {
    navList.classList.toggle("hidden");
})

//
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const searchBtn = document.querySelector("#searchBtn");
const trainContainer = document.querySelector("#train-container");

const getTrains = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    // console.log(data.trainDetails);
    data.trainDetails.forEach(trains => {
        trainContainer.innerHTML = "";
        const htmlStr = `
                <div class="mt-10">
                    <div class="flex text-xl font-bold items-center gap-3 justify-center">
                        <img src="https://eticket.railway.gov.bd/assets/img/train-app/running-train-icon.svg" alt="">
                        <h3 class="text-[#da924e]"><span>${selectFrom.value} </span>- <span>${selectTo.value}</span></h3>
                    </div>
                </div>
            `;

        trainContainer.insertAdjacentHTML("beforeend", htmlStr);

        if (trains.departureStation == selectFrom.value && trains.arrivalStation == selectTo.value) {
            console.log(trains.trainName);

        }
    });
}

searchBtn.addEventListener('click', () => {
    getTrains();
})