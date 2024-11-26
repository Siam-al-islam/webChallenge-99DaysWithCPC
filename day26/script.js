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
                <h2>Title: </h2>
                <p>Post ID: </p>
                <p>UserID: </p>
                <p>Body: </p>
            </div>
            `;

            container.insertAdjacentHTML("afterbegin", htmlStr);
        });
    }
}

fetchData()