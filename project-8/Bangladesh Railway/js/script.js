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
    console.log(data.trainDetails);
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

    data.trainDetails.forEach(trains => {
        if (trains.departureStation == selectFrom.value && trains.arrivalStation == selectTo.value) {
            console.log(trains.trainName);

            const trainInfo = `
                <div class="flex mt-10">
                    <div class="">
                        <h1 class="text-[#da924e] text-xl font-bold">${trains.trainName} <span>(${trains.availableSeats})</span></h1>
                        <div class="flex gap-5 items-center mt-5">
                            <h3>${trains.departureStation}</h3>
                            <div class="border-t-2 w-[300px] flex justify-center text-xs">
                                <h3>${trains.duration}</h3>
                            </div>
                            <h3>${trains.arrivalStation}</h3>
                        </div>
                    </div>
                </div>
            `;
            trainContainer.insertAdjacentHTML("beforeend", trainInfo);

            trains.classes.forEach((classData) => {
                const trainCard = `
                    <div class="mt-10">
                        <div>
                            <div class="train-card mt-8">
                                <div class="bg-[#e2e8e7] p-3">
                                    <h2 class="text-[18px] font-semibold">${classData.classType}</h2> <!-- Class Type -->
                                    <h2 class="text-[#006747] font-semibold mt-1">৳ <span>${classData.fare}</span></h2> <!-- Fare -->
                                    <p class="text-xs font-semibold">including VAT</p>
                                </div>
                                <div class="bg-[#d2dddb] p-2">
                                    <p class="text-[10px]">Available Tickets (Counter + Online) <br>
                                        <span class="text-base font-bold text-[#006747]">${classData.availableSeats}</span>
                                    </p>
                                    <button
                                        class="mt-2 bg-[#006747] uppercase font-semibold text-xs w-full py-1 text-white rounded-full">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                trainContainer.insertAdjacentHTML("beforeend", trainCard);
            });
        }
    });
}

searchBtn.addEventListener('click', () => {
    getTrains();
});
