import TrashIcon from '../assets/icons/trashcan.png';
import { deleteBook } from '../services/BookService';
import { styles } from '../styles';

const formatDescriptionText = description => {
  if (!description) {
    return '';
  }

  if (description.length > 465) {
    const shortenedText = description.slice(0, 465).concat('...');

    return shortenedText;
  }
};

const Book = ({ book, setBooksData }) => {
  const { id, description, imageUrl, author, title } = book;

  const onDeleteBook = async () => {
    const result = await deleteBook(id);

    if (result?.length) {
      setBooksData(result);
    }
  };

  return (
    <div style={styles.BookContainer}>
      <div style={{ margin: '15px' }}>
        <img src={imageUrl} alt='book cover' width='125px' height='200px' />
      </div>
      <div style={{ margin: '0px auto 15px 0px', maxWidth: '393px' }}>
        <h3 style={styles.CardBookTitle}>{title}</h3>
        <p style={styles.AuthorText}>{author}</p>
        <p style={styles.BodyText}>{formatDescriptionText(description)}</p>
      </div>
      <div
        style={{ margin: '15px 15px 15px auto', cursor: 'pointer' }}
        onClick={onDeleteBook}
      >
        <img src={TrashIcon} alt='delete book' height='21px' width='21px' />
      </div>
    </div>
  );
};

export default Book;
