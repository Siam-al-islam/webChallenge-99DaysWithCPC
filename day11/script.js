const fruitsNames = ['Apple', 'Banana', 'Mango', 'Goava'];
const fruitsNames2 = ['Orange', 'Pine-apple'];

const fruit = document.getElementById("name");
const length = document.getElementById("length");

// fruitsNames.push("Orange", "Pine-Apple");
// fruitsNames.shift()

// fruitsNames.splice(2, 0, "add")
const concatedArray = fruitsNames.concat(fruitsNames2)

length.innerHTML = concatedArray.length;
fruit.innerHTML = concatedArray;