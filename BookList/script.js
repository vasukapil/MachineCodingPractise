var inputTitle = document.getElementById('title');
var inputAuthor = document.getElementById('author');
var inputBookId = document.getElementById('bookId');
var AddBookbtn = document.querySelector('button');
var tableBody = document.getElementById('book-list');

var storedBooks = JSON.parse(localStorage.getItem('books')) || [];
for (const book of storedBooks) {
    appendBookToTable(book.title, book.author, book.bookId);
}

AddBookbtn.addEventListener("click", addBook);

function addBook(e) {
    e.preventDefault();
    var title = inputTitle.value;
    var author = inputAuthor.value;
    var bookId = inputBookId.value;

    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Book ID:", bookId);
    console.log(tableBody);

    var newBook = {
        title,
        author,
        bookId
    }
    appendBookToTable(title, author, bookId);
    storedBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(storedBooks));

    inputTitle.value = "";
    inputAuthor.value = "";
    inputBookId.value = "";

  }

  function appendBookToTable(title, author, bookId) {
    var newRow = document.createElement("tr");
    var titleCell = document.createElement("td");
    var authorCell = document.createElement("td");
    var bookIdCell = document.createElement("td");
    newRow.style.textAlign = "center";
    newRow.style.background="#FFFFFF";

    titleCell.textContent = title;
    authorCell.textContent = author;
    bookIdCell.textContent = bookId;

    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(bookIdCell);

    tableBody.appendChild(newRow);
}