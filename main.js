const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");
console.log(generateQuoteBtn, quoteOutput, authorOutput);

generateQuoteBtn.addEventListener("click", generateQuote);

 const arrayOfQuotes = [
    {
        author: "Emmanuel Benson",
        quote: "You only die once, but live everyday."
    },
    {
        author: "Stephen King",
        quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."
    },
    {
        author: "Anaïs Nin",
        quote: "We write to taste life twice, in the moment and in retrospect."
    },
    {
        author: "The Bible",
        quote: "The truth will set you free."
    },
    {
        author: "Sir Francis Bacon",
        quote: "Knowledge is power."
    },
    {
        author: "Friedrich Nietzsche",
        quote: "What doesn't kill us makes us stronger."
    },
    {
        author: "Aesop",
        quote: "United we stand, divided we fall."
    },
    {
        author: "Charles-Guillaume Étienne",
        quote: "If you want something done right, do it yourself."
    },
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`
}