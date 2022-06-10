import Book from '../components/Book';
import { styles } from '../styles.js';

/**
 * Bookshelf component renders a list of books
 * @param {Function} toggleFormView - callback to open form component for adding a new book
 * @returns - React JSX
 */

const mockBook = {
  id: 1,
  description: 'book',
  imageUrl: 'url',
  author: 'Kayla',
  title: 'title'
};

const Bookshelf = ({ toggleFormView }) => {
  // fetch and display all books on the bookshelf
  const mockBooks = [mockBook, mockBook, mockBook];

  return (
    <div style={styles.BookshelfContainer}>
      <div style={styles.BookshelfHeader}>
        <h1 style={styles.HeaderText}>Bookshelf</h1>
        <button style={styles.Button} onClick={() => toggleFormView(true)}>
          Add Book
        </button>
      </div>
      {mockBooks.map((book, i) => (
        <Book key={book.id + i} bookData={book} />
      ))}
    </div>
  );
};

export default Bookshelf;
