const quotes = [
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
    author: 'Dr. Seuss',
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    quote: "Love isn't something you find. Love is something that finds you.",
    author: 'Loretta Young',
  },
  {
    quote: 'Blessed are the hearts that can bend; they shall never be broken.',
    author: 'Albert Camus',
  },
  {
    quote: 'Do all things with love.',
    author: 'Og Mandino',
  },
  {
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'Love is composed of a single soul inhabiting two bodies.',
    author: 'Aristotle',
  },
  {
    quote: 'Where there is love there is life.',
    author: 'Mahatma Gandhi',
  },
];
function getQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.querySelector('.quotes').innerHTML = quotes[randomNumber].quote;
  document.querySelector('.authors').innerHTML = quotes[randomNumber].author;
}

const button = document.querySelector('.btn');
console.log(button);

button.addEventListener('click', getQuote);
