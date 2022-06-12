import { useState, useEffect } from 'react';
import Bookshelf from './views/Bookshelf';
import AddBookForm from './components/AddBookForm';
import { styles } from './styles';
import { getAllBooks } from './services/BookService';

const App = () => {
  const [formView, toggleFormView] = useState(false);
  const [booksData, setBooksData] = useState([]);

  const getBooks = async () => {
    const books = await getAllBooks();

    if (books?.length) {
      setBooksData(books);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div style={styles.AppRoot}>
      {!formView ? (
        <Bookshelf
          toggleFormView={toggleFormView}
          booksData={booksData}
          setBooksData={setBooksData}
        />
      ) : (
        <AddBookForm
          toggleFormView={toggleFormView}
          setBookData={setBooksData}
        />
      )}
    </div>
  );
};

export default App;
