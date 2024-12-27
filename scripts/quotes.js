const quotes = [
    { quote: "Fighting was the only thing I was ever good at, but at least I always fought for what I believed in.", author: "Gray Fox" },
    { quote: "I never felt truly alive unless I was staring death in the face.", author: "Solid Snake" },
    { quote: "Cake, and grief counseling, will be available at the conclusion of the test.", author: "GLaDOS" },
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const { quote, author } = getRandomQuote();
    document.getElementById('random-quote').innerHTML = `&ldquo;${quote}&rdquo;`;
    document.getElementById('quote-author').innerHTML = `&mdash;${author}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
    document.getElementById('another-quote').addEventListener('click', updateQuote);
});
