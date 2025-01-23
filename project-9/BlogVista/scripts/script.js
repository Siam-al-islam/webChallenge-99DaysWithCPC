// navbar responsive
const navList = document.querySelector(".navbar-list");
const navIcon = document.querySelector(".navbar-icon");

navIcon.addEventListener('click', () => {
    navList.classList.toggle("hidden");
})

//showing blogs to the UI
const blogsContainer = document.querySelector("#latest-posts-container");
const modal = document.querySelector("#blog-modal");
const closeModal = document.querySelector("#close-modal");
const blogContent = document.querySelector("#blog-content");

const showBlogs = async () => {
    const res = await fetch("blogs.json");
    const data = await res.json();

    if (data) {
        data.forEach((blog, index) => {
            const blogsStr = `
                <div class="border border-[#E8E8EA] rounded-xl p-4 w-full blog-card">
                    <div class="blog-image-wrapper">
                        <img class="rounded-md w-full object-cover blog-image max-h-[250px]" src="${blog.image ? blog.image : "https://i.ibb.co.com/p0tnG2v/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg"}" alt="">
                    </div>
                    <div class="mt-6">
                        <h3 class="text-xs text-[#4B6BFB] bg-[#4b6bfb10] px-3 py-1 rounded-md w-fit font-medium">
                            ${blog.category}
                        </h3>
                        <h2 class="mt-4 font-semibold text-2xl">
                            ${blog.blog_title}
                        </h2>
                        <button data-index="${index}" id="read-more-btn" class="border transition-all mt-4 w-full text-white font-bold py-2 rounded-xl bg-[#000000]">Read More</button>
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

        // read more button functionality
        document.querySelectorAll("#read-more-btn").forEach(btn => {
            btn.addEventListener('click', (e) => {
                const blogIndex = e.target.dataset.index;
                const blog = data[blogIndex];

                blogContent.innerHTML = `
                <div class="transition">
                    <h1 class="text-2xl font-bold">Blog Details</h1>
                    <img class="w-full mt-6" src="${blog.image}" alt="">
                    <h3 class="text-[#4B6BFB] bg-[#4b6bfb10] px-3 py-1 rounded-md w-fit font-medium mt-4">
                            ${blog.category}
                    </h3>
                    <h2 class="mt-5 font-semibold text-2xl">${blog.blog_title}</h2>
                    <p class="mt-3">${blog.blog_description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3 mt-5">
                            <img class="w-8 h-8 rounded-full" src="${blog.author_profile}" alt="">
                            <h3>${blog.author_name}</h3>
                        </div>
                        <h4 class="text-[#97989F] mt-2">${blog.upload_date}</h4>
                    </div>
                </div>
                `;

                modal.classList.remove("hidden");
            })
        })
    }
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

showBlogs();

//write blog button functionality
const blogEditorModal = document.querySelector("#blog-editor-modal");

const openBlogEditor = () => {
    blogEditorModal.classList.remove("hidden");
}

const closeBlogEditor = () => {
    blogEditorModal.classList.add("hidden")
}

//poster upload functionality
let posterUploadBtn = document.querySelector(".posterImageInput");
let posterImage = document.querySelector("#poster-photo");

posterUploadBtn.onchange = () => {
    posterImage.src = URL.createObjectURL(posterUploadBtn.files[0]);
}