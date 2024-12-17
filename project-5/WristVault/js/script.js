const cardWrapper = document.querySelector('#card-wrapper');

const getWatches = async () => {
    const data = await fetch("watches.json");
    const res = await data.json();
    console.log(res);

    res.watches.forEach(watch => {
        const cardStr = `
        <div class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl">
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
                <div class="flex gap-2">
                    <button class="mt-4 w-2/4 bg-[#AE946A] text-white py-2 rounded-md">Add To Cart</button>
                    <button class="mt-4 w-2/4 bg-[#AE946A] text-white py-2 rounded-md">View Details</button>
                </div>
            </div>
        </div>
        `;

        cardWrapper.insertAdjacentHTML('beforeend', cardStr);
    });
}

getWatches()