// navbar responsive
const navList = document.querySelector(".navbar-list");
const navIcon = document.querySelector(".navbar-icon");

navIcon.addEventListener('click', () => {
    navList.classList.toggle("hidden");
})

//showing blogs to the UI
const blogsContainer = document.querySelector("#latest-posts-container");

const showBlogs = async () => {
    const res = await fetch("blogs.json");
    const data = await res.json();
    console.log(data);

    if (data) {
        data.forEach(blog => {
            const blogsStr = `
                <div class="border border-[#E8E8EA] rounded-xl p-4 w-full">
                    <div>
                        <img class="rounded-md w-full object-cover" src="${blog.image}" alt="">
                    </div>
                    <div class="mt-6">
                        <h3 class="text-xs text-[#4B6BFB] bg-[#4b6bfb10] px-3 py-1 rounded-md w-fit font-medium">
                            ${blog.category}
                        </h3>
                        <h2 class="mt-4 font-semibold text-2xl">
                            ${blog.blog_title}
                        </h2>
                        <button class="mt-4 w-full text-white font-bold py-2 rounded-xl bg-[#000000]">Read More</button>
                        <div class="flex items-center gap-5 text-[#97989F] mt-6">
                            <div class="flex items-center gap-3">
                                <img src="${blog.author_profile}" alt="">
                                <h3>${blog.author_name}</h3>
                            </div>
                            <div>
                                <h2>${blog.upload_date}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            blogsContainer.insertAdjacentHTML("beforeend", blogsStr);
        });
    }
}

showBlogs()