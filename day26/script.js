const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);

    if (res) {
        res.forEach(post => {
            console.log(post);
            const container = document.querySelector(".container");
            const htmlStr = `
            <div class="card">
                <h2>Title: ${post.title}</h2>
                <p>Post ID: ${post.id}</p>
                <p>UserID: ${post.userId}</p>
                <p>Body: ${post.body}</p>
            </div>
            `;

            container.insertAdjacentHTML("beforeend", htmlStr);
        });
    }

    else {
        console.log("data not found");
    }
}

fetchData()