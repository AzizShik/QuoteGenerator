import '../sass/style.scss'

const twitterBtn = document.querySelector('.quote__twitter');
const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

twitterBtn.addEventListener('click', tweetQuote);