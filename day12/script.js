const container = document.getElementById("container");
const names = [
    "Siam", "Aiden", "Sophia", "Liam", "Olivia", "Noah", "Emma", "Jackson", "Isabella",
    "Elijah", "Mia", "Lucas", "Amelia", "Mason", "Harper", "Logan", "Evelyn",
    "Ethan", "Abigail", "James", "Ella", "Alexander", "Scarlett", "Benjamin",
    "Grace", "Michael", "Aria", "William", "Chloe", "Daniel", "Avery"
];

for (let i = 0; i < names.length; i++) {
    console.log(i);
    const p = document.createElement("p");
    p.classList.add("item");
    p.innerText = names[i];
    container.appendChild(p);
}

names.forEach((name) => {
    const nameHtml = `
        <p class="item">${name}</p>
    `;
    container.insertAdjacentHTML("afterbegin", nameHtml);
})

for (name of names) {
    const nameText =
        `
    <p class="item">${name}</p>
    `;
    container.insertAdjacentHTML("afterbegin", nameText)
}