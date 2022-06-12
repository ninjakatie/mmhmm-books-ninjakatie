import { useEffect, useState } from 'react';
import Book from '../components/Book';
import { styles } from '../styles.js';

/**
 * Bookshelf component renders a list of books
 * @param {Function} toggleFormView - callback to open form component for adding a new book
 * @param {Object[]} booksData - an array of book objects to be displayed
 * @param {Function} setBooksData - callback function that manages the state of the main bookData state variable.
 * @returns - React JSX
 */

const Bookshelf = ({ toggleFormView, booksData, setBooksData }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (booksData) {
      setBooks(booksData);
    }
  }, [booksData]);

  return (
    <div style={styles.BookshelfContainer}>
      <div style={styles.BookshelfHeader}>
        <h1 style={styles.HeaderText}>Bookshelf</h1>
        <button style={styles.Button} onClick={() => toggleFormView(true)}>
          Add Book
        </button>
      </div>
      {books?.length ? (
        books.map(book => (
          <div key={book.id}>
            <Book book={book} setBooksData={setBooksData} />
          </div>
        ))
      ) : (
        <div style={{ ...styles.InputTitle, ...styles.HeaderContainer }}>
          There are no books on the bookshelf. Add a book to get started.
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
