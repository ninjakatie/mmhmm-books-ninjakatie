import { useState } from 'react';
import { styles } from '../styles';
import xIcon from '../assets/icons/xCancelIcon.png';

const formFields = ['Title', 'Author', 'Description', 'ImageUrl'];

const AddBookForm = ({ toggleFormView }) => {
  const [fieldValues, updateFieldValues] = useState({});

  const onFieldValueUpdate = (newValue, field) => {
    const newFields = {
      ...fieldValues,
      [field]: newValue
    };

    console.log('new fields', newFields);

    updateFieldValues(newFields);
  };

  const onSaveBook = () => {};

  return (
    <div style={styles.FormParent}>
      <div style={styles.HeaderContainer}>
        <h1 style={styles.HeaderText}>Add a new book</h1>
        <div onClick={() => toggleFormView(false)}>
          <img src={xIcon} alt='close form' width='27px' height='27px' />
        </div>
      </div>

      {formFields.map(field => {
        return (
          <div key={field}>
            <h3 style={styles.InputTitle}>{field}</h3>
            {field !== 'Description' ? (
              <input
                style={styles.TextField}
                onChange={e => onFieldValueUpdate(e.target.value, field)}
              />
            ) : (
              <textarea style={styles.TextArea} />
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
