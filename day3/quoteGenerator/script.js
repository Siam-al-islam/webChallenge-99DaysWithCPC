const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can, and you're halfway there. – Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I failed my way to success. - Thomas Edison",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Act as if what you do makes a difference. It does. - William James",
    "The best revenge is massive success. - Frank Sinatra"
];
const generateBtn = document.querySelector("#btn");
const quoteField = document.querySelector("#quote-field");

const generateQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteField.innerHTML = quote;
}

generateBtn.addEventListener('click', generateQuote);