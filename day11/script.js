const names = ['siam', 'sakib', 'saif', 'salman'];
const eachName = document.getElementById("name");
const length = document.getElementById("length");

names.push("robi", "rasel");

eachName.innerHTML = names;
length.innerHTML = names.length;