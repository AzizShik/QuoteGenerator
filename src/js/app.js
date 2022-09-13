import '../sass/style.scss'
import {
  quoteContainer,
  twitterBtn,
  quoteText,
  quoteAuthor,
  nextBtn,
  loader,
  progressBar
} from './DOMElements.js';

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

function loading() {
  loader.style.display = 'block';
  quoteContainer.style.display = 'none';
}

function complete() {
  if (loader.style.display === 'block') {
    loader.style.display = 'none';
    quoteContainer.style.display = 'block';
  }
}


async function getRandomQuote() {
  try {
    const resp = await fetch('https://api.quotable.io/random');
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}



async function createQuote() {
  loading();
  try {
    const data = await getRandomQuote();
    quoteText.innerText = `“${data.content}”`;
    quoteAuthor.innerText = data.author;
    complete();
  } catch (error) {
    console.log(error)
  }
}

function progressBar() {

}

createQuote();
nextBtn.addEventListener('click', createQuote);
twitterBtn.addEventListener('click', tweetQuote);
progressBar.addEventListener('animationend', createQuote)