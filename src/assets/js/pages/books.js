const btn = document.getElementById('search-btn');

btn.onclick = function () {
    const bookTitle = document.getElementById('bookTitle').value;
    if (bookTitle !== '') {
        searchBooks(bookTitle);
        scrollToBooksList();  //Scroll to element on same btn
    }
}


async function searchBooks(search){  

    // try {
    //     const cachedData = localStorage.getItem(search);
    //     if (cachedData) {
    //         const cachedBooks = JSON.parse(cachedData);
    //         renderBooks(cachedBooks);
    //         return; 
    //     }
        
    const resp = await fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,author_key,first_sentence,cover_i,ebook_access,has_fulltext,ia&limit=12`);
    const json = await resp.json();
    const answer = formatBooks(json.docs);
    renderBooks(answer);

    // localStorage.setItem(search, JSON.stringify(answer));
    // } catch (error) {
    //     console.error('Error fetching books:', error);
    // }

    //this 4 lines go into 'here' if the storage is involved

}

function formatBooks(docs){
    const result = [];
    docs.forEach(book => {
      const key = book.key.replace('/works/', '');
      const authors = [];
      book.author_name && book.author_name.forEach((author, index) => {
        authors.push({
          name: author,
          photo: `https://covers.openlibrary.org/a/olid/${book.author_key[index]}-L.jpg`
        });
      });
      const readLink = book.has_fulltext
        ? `https://openlibrary.org/borrow/ia/${book.ia[0]}?ref=ol` : '';
      result.push({
        key,
        title: book.title,
        authors,
        cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
        readLink
      });
    });
    return result;
}

function scrollToBooksList() {
  const booksListSection = document.getElementById('books-mark');
  booksListSection.scrollIntoView({ behavior: 'smooth' });
}

function renderBooks(books) {
    let list = '';
    books.forEach(book => {
        list += bookHTML(book);
    });
    document.getElementById('books-list').innerHTML = list;
}

function bookHTML(book) {
  const authors = book.authors ? book.authors.map(item => item.name).join(', ') : '';
  return `
  <div class="api-grid">
  <img src="${book.cover}" class="img-top" alt="${book.title}">
      <div class="card-info">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text"><b>Author(s):</b> ${authors}</p>
      </div>
  </div>
  `;
}