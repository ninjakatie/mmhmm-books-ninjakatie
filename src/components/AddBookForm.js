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

const AddBookForm = ({ toggleFormView, setBookData }) => {
  const [fieldValues, updateFieldValues] = useState({
    imageUrl: BOOK_COVER_IMG
  });

  const onFieldValueUpdate = (newValue, field) => {
    const newFields = {
      ...fieldValues,
      [field]: newValue
    };

    updateFieldValues(newFields);
  };

  const onSaveBook = async () => {
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
              />
            )}
          </div>
        );
      })}

      <button style={styles.Button} onClick={onSaveBook}>
        Save
      </button>
    </div>
  );
};

export default AddBookForm;
