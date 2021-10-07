const quotes = [
    {quote: "A", author: "a"},
    {quote: "B", author: "b"},
    {quote: "C", author: "c"},
    {quote: "D", author: "d"},
    {quote: "E", author: "e"},
    {quote: "F", author: "f"},
    {quote: "G", author: "g"},
    {quote: "H", author: "h"},
    {quote: "I", author: "i"},
    {quote: "J", author: "j"},
];

const QUOTES_LENGTH = quotes.length;

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * QUOTES_LENGTH); //floor : 내림 / ceil : 올림 / round : 정수부분 추출

const todaysQuote = quotes[index];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;