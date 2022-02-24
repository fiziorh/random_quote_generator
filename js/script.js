/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// make an array of objects that contains (quote,citation,source, and tags)
let quotes = [
  {
    quote: "Be yourself, everyone else is already taken.",
    citation: "Book",
    source: "Oscar Wilde",
    year: 1923,
    tags: ", Motivation"
  },
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    citation: "TV-Show",
    source: "Marilyn Monroe",
    year: 1944,
    tags: ", Sarcastic"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure abot the universe.",
    citation: "Book",
    source: "Albert Einstein",
    year: 2020,
    tags: ", Sarcastic"
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    citation: "Book",
    source: "William W. Purkey",
    year: 1978,
    tags: ", Motivation"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    citation: "Book",
    source: "Mark Twain",
    year: 1982,
    tags: ", Wisdom"
  },
  {
    quote: "It is better to be hated for what you are than to be loved what you are not.",
    citation: "Book",
    source: "Andre Gide, Autumn Leaves",
    year: 1920,
    tags: ", Wisdom"
  },
  {
    quote: "Everybody has a plan 'till they get punched in the mouth.",
    citation: "Boxing ring",
    source: "Mike Tyson",
    year: 1921,
    tags: ", Random"
  }

];



/***
 * `getRandomQuote` function
***/

// function to generate a randomquote
function getRandomQuote() {
  let number = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[number]
}


/***
 * `printQuote` function
***/
// a timer to make the quote and the background change in 7000ms(7sec)
setInterval(printQuote, 7000)
setInterval(backgrounclr, 7000)

// function to make a random quote and cast it into an html attribute
function printQuote() {
  let randomquote = getRandomQuote();
  let htmlstr = `<p class="quote">${randomquote.quote}</p><p class ="source">${randomquote.source}`;
  if (randomquote.citation) {
    htmlstr += `<span class="citation">${randomquote.citation}</span>`;
  };
  if (randomquote.year) {
    htmlstr += `<span class="year">${randomquote.year}</span>`;
  };
  if (randomquote.tags) {
    htmlstr += `<span class="tags">${randomquote.tags}</span>`;
  }
  htmlstr += `</p>`
  document.getElementById('quote-box').innerHTML = htmlstr;
}

// function to make a random background color
function backgrounclr() {
  let backgroundarr = [
    `#8ecae6`,
    `#219ebc`,
    `#ffb703`,
    `#fb8500`,
    `#2a9d8f`,
    `#e76f51`,
    `#fca311`

  ];
  let number = Math.floor(Math.random() * backgroundarr.length) + 1;
  return document.body.style.backgroundColor = `${backgroundarr[number]}`;

}
// to make the backgroundclr function generate a new quote if the user clicked
document.addEventListener("click", backgrounclr, false);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
// to make the printQuote function generate a new quote if the user clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);