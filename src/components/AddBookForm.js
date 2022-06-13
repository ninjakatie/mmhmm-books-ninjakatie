import { useState } from 'react';
import { styles } from '../styles';
import xIcon from '../assets/icons/xCancelIcon.png';
import { saveBook } from '../services/BookService';

const FORM_FIELDS = {
  title: 'Title',
  author: 'Author',
  description: 'Description',
  imageUrl: 'Image URL'
};

const BOOK_COVER_IMG = 'https://picsum.photos/125/200';

/**
 * Component that renders the Form input fields for saving a new book to the bookshelf.
 * @param {Function} toggleFormView - callback function used to toggle between the Bookshelf and the Form pages.
 * @param {Function} setBookData - callback function that manages the state of the main bookData state variable, refreshing the list with a new list of books.
 * @returns - React JSX
 */

const AddBookForm = ({ toggleFormView, setBookData }) => {
  const [fieldValues, updateFieldValues] = useState({
    title: '',
    author: '',
    description: '',
    imageUrl: BOOK_COVER_IMG
  });

  const onFieldValueUpdate = (newValue, field) => {
    const newFields = {
      ...fieldValues,
      [field]: newValue
    };

    updateFieldValues(newFields);
  };

  const onSaveBook = async e => {
    e.preventDefault();

    if (Object.keys(fieldValues)?.length) {
      const newBookList = await saveBook(fieldValues);

      if (newBookList?.length) {
        setBookData(newBookList);
        toggleFormView(false);
      }
    }
  };

  return (
    <div style={styles.FormParent}>
      <div style={styles.HeaderContainer}>
        <h1 style={styles.HeaderText}>Add a new book</h1>
        <div
          onClick={() => toggleFormView(false)}
          style={{ cursor: 'pointer' }}
        >
          <img src={xIcon} alt='close form' width='27px' height='27px' />
        </div>
      </div>

      <form style={styles.Form} onSubmit={onSaveBook}>
        {Object.entries(FORM_FIELDS).map(([key, fieldName]) => {
          return (
            <div key={key}>
              <h3 style={styles.InputTitle}>{fieldName}</h3>
              {key !== 'description' ? (
                <input
                  style={styles.TextField}
                  onChange={e => onFieldValueUpdate(e.target.value, key)}
                  value={fieldValues[key]}
                />
              ) : (
                <textarea
                  style={styles.TextArea}
                  onChange={e => onFieldValueUpdate(e.target.value, key)}
                  value={fieldValues[key]}
                />
              )}
            </div>
          );
        })}

        <button type='submit' style={styles.Button} onClick={onSaveBook}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
