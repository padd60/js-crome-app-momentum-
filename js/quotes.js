const quotes = [
  {
    quote: "You'll never find a rainbow if you're looking down.",
    author: "Chalie Chaplin",
  },
  {
    quote: "There is always light behind the clouds.",
    author: "Louisa May Alcott",
  },
  {
    quote: "Change before you have to.",
    author: "Jack Welch",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote: "My life did not please me, so I created mt life.",
    author: "Coco Chanel",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Peace begins with a smile.",
    author: "Mother Teresa",
  },
  {
    quote: "Everything is practice.",
    author: "Pele",
  },
  {
    quote: "If you want to be happy, be.",
    author: "Leo Tolstoy",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
