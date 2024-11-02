const generateBtn = document.getElementById('btn');

const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const setRandomColor = () => {
    document.body.style.backgroundColor = getRandomColor();
    console.log(getRandomColor());
}