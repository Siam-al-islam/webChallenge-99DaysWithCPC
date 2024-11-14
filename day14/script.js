const info = [
    {
        name: "Zayed khan",
        age: 21,
        salary: 1000000
    },
    {
        name: "Siam Al Islam",
        age: 20,
        salary: 500000
    },
    {
        name: "Khan Mahin",
        age: 30,
        salary: 13000000
    },
    {
        name: "Tanjim Siddik Rion",
        age: 21,
        salary: 5000000
    }
];

const container = document.getElementById("container");

info.forEach((person)=> {
  const name = person.name;
  const age = person.age;
  const salary = person.salary;

  const html = `
    <div class="info-container">
      <p>${name}</p>
      <p>${age}</p>
      <p>${salary}</p>
    </div>
  `;
  
  container.insertAdjacentHTML("afterend", html)
})