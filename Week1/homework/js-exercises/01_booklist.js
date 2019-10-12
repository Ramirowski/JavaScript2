const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    image: 'https://mitpress.mit.edu/sites/default/files/9780262640374.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400._UY630_SR1200,630_.jpg',
  },
  {
    title: 'The Martian Chronicles',
    author: 'Isaac Asimov',
    alreadyRead: true,
    image: 'https://csgstories.files.wordpress.com/2012/06/chronicles.jpg',
  },
];

const ul = document.createElement('ul');
for (let book of books) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = `${book.title} by ${book.author}`;
  p.style.color = book.alreadyRead ? 'green' : 'red';
  li.append(p);
  const img = document.createElement('img');
  img.setAttribute('src', book.image);
  li.append(img);
  ul.append(li);
}

document.body.append(ul);
