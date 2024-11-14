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
        salary: 5000
    }
];

const container = document.getElementById("container");

info.forEach((person)=> {
  const name = person.name;
  const age = person.age;
  const salary = person.salary;
  // const h2 = document.createElement("h2");
  // h2.innerText = name;
  // container.appendChild(h2);
  const html = `
    <div>
      <h3>${name}</h3>
      <p></p>
      <p></p>
    </div>
  `
})

// console.log(info);

