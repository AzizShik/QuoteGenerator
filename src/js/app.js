import '../sass/style.scss'

const twitterBtn = document.querySelector('.quote__twitter');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');
const nextBtn = document.querySelector('.quote__next');

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);

async function getRandomQuote() {
  const resp = await fetch('https://api.quotable.io/random');
  const data = await resp.json();
  return data;
}

async function createQuote() {
  const data = await getRandomQuote();
  quoteText.innerText = `“${data.content}”`;
  quoteAuthor.innerText = data.author;
  console.log(data)
}


createQuote();

nextBtn.addEventListener('click', createQuote);