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
                        <div class="flex items-center justify-between text-[#97989F] mt-6">
                            <div class="flex gap-3 items-center">
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

// ------------- post blog functionality ----------------

// image upload 
let posterUploadBtn = document.querySelector("#imageInput");
let posterImage = document.querySelector("#poster-photo");

let authorImageInput = document.querySelector("#authorimageInput");
let authorImage = document.querySelector("#author-image");

// form informations 
const blogTitle = document.querySelector("#blog-title");
const blogCategory = document.querySelector("#blog-category");
const blogDate = document.querySelector("#blog-date");
const blogDescription = document.querySelector("#blog-description");
const authorName = document.querySelector("#author-name");

posterUploadBtn.onchange = () => {
    posterImage.src = URL.createObjectURL(posterUploadBtn.files[0]);
}

authorImageInput.onchange = () => {
    authorImage.src = URL.createObjectURL(authorImageInput.files[0]);
}

const postBtn = document.querySelector("#post-btn");
const userPostsContainer = document.querySelector("#user-posts-container");
const userSection = document.querySelector("#user-section");
const blogCount = document.querySelector("#blogs-count");
let blogs = [];

postBtn.addEventListener('click', () => {
    blogCount.innerHTML = blogs.length + 1;
    blogEditorModal.classList.add("hidden");
    userSection.classList.remove("hidden")

    const blogData = {
        poster: posterImage.src,
        title: blogTitle.value,
        category: blogCategory.value,
        date: blogDate.value,
        description: blogDescription.value,
        author: authorName.value,
        author_image: authorImage.src
    };

    blogs.push(...[blogData]);

    userPostsContainer.innerHTML = "";

    blogs.forEach((blog, index) => {
        const blogsStr = `
                <div class="border border-[#E8E8EA] rounded-xl p-4 w-full blog-card">
                    <div class="blog-image-wrapper">
                        <img class="rounded-md w-full object-cover blog-image max-h-[250px]" src="${blog.poster ? blog.poster : "https://i.ibb.co.com/p0tnG2v/360-F-470299797-UD0eo-VMMSUb-HCc-NJCdv2t8-B2g1-GVq-Ygs.jpg"}" alt="">
                    </div>
                    <div class="mt-6 mb-4">
                        <h3 class="text-xs text-[#4B6BFB] bg-[#4b6bfb10] px-3 py-1 rounded-md w-fit font-medium capitalize">
                            ${blog.category ? blog.category : "No category"}
                        </h3>
                        <h2 class="mt-4 font-semibold text-2xl capitalize">
                            ${blog.title ? blog.title : "No Title"}
                        </h2>
                        <div class="flex gap-3 items-center justify-between mt-3 flex-wrap"> 
                            <p class="capitalize">${blog.description ? blog.description.slice(0, 70) + "..." : "Not described"}</p>
                            <a data-index="${index}" class="text-[#4B6BFB] text-xs font-bold cursor-pointer">Read More</a>
                        </div>
                        <div class="flex items-center justify-between text-[#97989F] mt-6">
                            <div class="flex gap-3 items-center">
                                <img class="h-12 w-12 rounded-full object-cover" src="${blog.author_image ? blog.author_image : "https://i.ibb.co.com/3d2f5sB/user-profile-icon-vector-avatar-600nw-2220431045.webp"}" alt="">
                                <h3>${blog.author ? blog.author : "User"}</h3>
                            </div>
                            <div>
                                <h2>${blog.date ? blog.date : "No Date"}</h2>
                            </div>
                        </div>
                    </div>
                    <btn id="deleteBtn" class="bg-red-500 text-white py-2 rounded-xl w-full flex items-center gap-3 justify-center cursor-pointer font-bold">Delete Blog <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></btn>
                </div>
            `;

        userPostsContainer.insertAdjacentHTML('beforeend', blogsStr);

        // read more functionality
        document.querySelectorAll("a").forEach(btn => {
            btn.addEventListener('click', (e) => {
                const blogIndex = e.target.dataset.index;
                const blog = blogs[blogIndex];

                blogContent.innerHTML = `
                    <div class="transition">
                        <h1 class="text-2xl font-bold">Blog Details</h1>
                        <img class="w-full h-[250px] object-cover mt-6" src="${blog.poster}" alt="">
                        <h3 class="text-[#4B6BFB] bg-[#4b6bfb10] px-3 py-1 rounded-md w-fit font-medium mt-4">
                                ${blog.category}
                        </h3>
                        <h2 class="mt-5 font-semibold text-2xl">${blog.title}</h2>
                        <p class="mt-3">${blog.description}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3 mt-5">
                                <img class="w-8 h-8 rounded-full" src="${blog.author_image}" alt="">
                                <h3>${blog.author}</h3>
                            </div>
                            <h4 class="text-[#97989F] mt-2">${blog.date}</h4>
                        </div>
                    </div> `;

                modal.classList.remove("hidden");
            })
        })

        // delete functionality
        const deleteBtn = document.querySelectorAll("#deleteBtn");
        deleteBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.blog-card').remove();
                blogs.splice(index, 1);
                blogCount.innerHTML = blogs.length;
            })
        })

    })
})